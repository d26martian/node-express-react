const route = require('express').Router();

const renderTemplate = require('../../lib/renderTemplate');

const Home = require('../views/Home');

route.get('/', (req, res) => {
  renderTemplate(Home, null, res);
});

module.exports = route;
