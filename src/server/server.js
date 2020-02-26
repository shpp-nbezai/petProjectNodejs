const express = require('express');
const middleware = require('../config/middleware');
const routes = require('../config/router');
const path = require('path');
const bodyParser = require('body-parser');

/**
 * @type {express}
 * @constant {express.Application}
 */
const app = express();

/**
 * @description express.Application Middleware
 */
middleware.init(app);

/**
 * @description express.Application Routes
 */
routes.init(app);

/**
 * @description sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

/**
 * @description set up ejs template for views
 */
app.set('view engine', 'ejs');

/**
 * @description set up path for views directory
 */
app.set('views', path.join(__dirname, '../views'));

/**
 * @description set up path for views directory
 */
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
