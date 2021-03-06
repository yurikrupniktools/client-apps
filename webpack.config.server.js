// const reduce = require('lodash/reduce');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SwaggerJSDocWebpackPlugin = require('swagger-jsdoc-webpack-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin-v2');
// const { StatsWriterPlugin } = require('webpack-stats-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const filename = 'server.js';
const cwd = process.cwd();
const json = require(path.resolve(cwd, './package')); // eslint-disable-line
const entry = json.name.includes('webserver') || json.name.includes('docs')
    ? './index.jsx' : './index.js';

// const alias = reduce(json.dependencies, (acc, v, k) => {
//     acc[k] = path.resolve(cwd, 'node_modules', k);
//     return acc;
// }, {});

// console.log('alias', alias);

module.exports = (env, argv) => {
    const isProd = env ? !!env.prod : false;
    // const isDebug = env ? !!env.debug : false;
    !isProd && require(path.resolve(cwd, './src/config')); // eslint-disable-line
    return {
        context: path.resolve(cwd, 'src'),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss'],
            // alias,
            // modules: [path.resolve(cwd), 'node_modules']
        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: 'source-map',
        entry,
        output: {
            path: path.resolve(cwd, 'dist'),
            chunkFilename: '[name].js',
            filename,
            publicPath: '/'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                rootMode: 'upward',
                            }
                        },
                        // {
                        //     loader: 'eslint-loader'
                        // }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                // 'process.env.PORT': JSON.stringify(process.env.PORT),
                // 'process.env.USERS_HOST': JSON.stringify(process.env.USERS_HOST),
                // 'process.env.PROJECTS_HOST': JSON.stringify(process.env.PROJECTS_HOST),
                // 'process.env.port': JSON.stringify(process.env.port),
                // 'process.env.host': JSON.stringify(process.env.host),
                // 'process.env.HOST': JSON.stringify(process.env.HOST),
                // 'process.env.DEBUG': JSON.stringify(isDebug),
                // 'process.env.DEST_PORT': JSON.stringify(process.env.DEST_PORT),
                // 'process.env.DOCKER_HOST': JSON.stringify(process.env.DOCKER_HOST),
                // 'process.env.DESTINATION_HOST': JSON.stringify(process.env.DESTINATION_HOST)
            }),
            // new StatsWriterPlugin({
            //     fields: ["assets", "modules"]
            // }),
            new GenerateJsonPlugin('package.json', Object.assign({}, json, {
                main: filename,
                files: [],
                scripts: {
                    start: `node ${filename}`
                },
                devDependencies: {}
            })),
            new SwaggerJSDocWebpackPlugin({
                swaggerDefinition: {
                    openapi: '3.0.0',
                    info: {
                        title: json.name,
                        version: json.version,
                        description: json.description
                    }
                },
                apis: ['./src/api/**/index.js', './src/api/**/model.js'],
            }),
            fs.existsSync(path.resolve(cwd, 'jsdoc.json')) ? new JsDocPlugin({
                conf: path.resolve(cwd, 'jsdoc.json') // single jsdoc file
            }) : () => {},
            // !isProd && process.cwd().includes('webserver1') ? new BundleAnalyzerPlugin({}) : new BundleAnalyzerPlugin({
            //     analyzerMode: 'static',
            //     openAnalyzer: false,
            //
            // }),
            new CopyPlugin([
                { from: path.join(cwd, 'app.yml') }
            ]),
            argv.watch ? new NodemonPlugin({
                script: path.resolve(cwd, 'dist', filename),
                watch: path.resolve(cwd, 'dist', filename),
                verbose: true
            }) : () => {}
        ],
    };
};
