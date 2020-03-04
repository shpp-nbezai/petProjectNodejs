const express = require('express');
const flash = require('connect-flash');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const routes = require('../config/router');
const middleware = require('../config/middleware');
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
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * @description add flash massages 
 */
const sessionStore = new session.MemoryStore();

app.use(cookieParser('secret'));
app.use(session({
    secret: 'happy dog',
    saveUninitialized: true,
    resave: true,
}));
app.use(flash());

module.exports = app;
