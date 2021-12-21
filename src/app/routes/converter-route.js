const express = require('express');
const route = express.Router();

const controller = require('../components/controller.js');

module.exports = () => {
    route.get('/:uah', controller);

    return route;
}
