'use strict';

/**
 * Dependencies
 */

const koa = require('koa');
const app = koa();

const logger = require('koa-logger');
const route = require('koa-route');
const serve = require('koa-static');

/**
 * Load .env file
 */

if (process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

/**
 * Controllers
 */

const index = require('./controllers/index');

/**
 * Middleware
 */

app.use(logger());
app.use(serve(__dirname + '/public'));

/**
 * Routes
 */

app.use(route.get('/', index));

/**
 * Configuration
 */

const port = process.env.PORT || 3000;
app.listen(port);

console.log('Starting application on port', port);
