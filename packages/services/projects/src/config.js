/* this file is used in webpack client for dev port and proxy host */
// console.log('process.env.PORT', process.env.PORT);
const port = Number(process.env.PORT) || 7002;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.DOCKER_HOST || process.env.HOST || 'http://localhost';
const baseURL = `${host}:${isProd || process.env.DEBUG ? port : port + 1}`;

function handleDatabaseUrl() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        return 'mongodb://localhost/client-apps';
    }
    return url.includes('mlab.com')
        ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${url}` : url;
}

const databaseUrl = handleDatabaseUrl();
console.log('databaseUrl', databaseUrl); // eslint-disable-line

console.log('port', port); // eslint-disable-line
// console.log('host', host); // eslint-disable-line
// console.log('baseurl', baseURL); // eslint-disable-line


module.exports = {
    port,
    databaseUrl,
    baseURL,
    isProd,
    host
};
