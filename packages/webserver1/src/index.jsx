import path from 'path';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import axios from 'axios';
import { port, isProd, baseURL } from './config';
import render from './services/render';
import App from './components/App';
import routes from './components/routes';

const webServer = express();

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

webServer.use(cors());
webServer.use(morgan('dev'));
webServer.use(express.static(assets));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

webServer.use('/api', (req, res, next) => {
    // console.log('process.emv', process.env);
    if (req.url === '/users') {
        return axios.get(`${baseURL}:3000/api${req.url}`)
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                console.log('err', err);
            });
    }
    return next();
});

webServer.use(render(App, routes));

webServer.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
