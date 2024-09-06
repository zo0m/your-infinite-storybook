const appHost = process.env.API_HOST ?? 'localhost';
const appPort = process.env.API_PORT ?? 3333;
const globalPrefix = process.env.API_GLOBAL_PREFIX ?? 'api';

module.exports = {
    [`/${globalPrefix}`]: {
        target: `http://${appHost}:${appPort}`,
        secure: false
    }
};
