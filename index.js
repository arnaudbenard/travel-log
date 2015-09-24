'use strict';

/**
 * Dependencies
 */

const koa = require('koa');
const app = koa();

const logger = require('koa-logger');
const route = require('koa-route');

/**
 * Load .env file
 */

require('dotenv').load();

/**
 * Controllers
 */

const index = require('./controllers/index');

/**
 * Middleware
 */

app.use(logger());

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
