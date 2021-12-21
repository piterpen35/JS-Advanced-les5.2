const Router = require('express').Router;

const controller = require('./converter-route.js');

module.exports = () => {
    const routing = Router();

    routing.use('/converter', controller());

    return routing;
}
