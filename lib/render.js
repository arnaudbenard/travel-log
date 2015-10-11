'use strict';

/**
 * Dependencies
 */

const views = require('co-views');

/**
 * Use the ejs template engine
 */

module.exports = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});
