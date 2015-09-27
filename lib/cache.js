'use strict';

/**
 * Dependencies
 */

const LRU = require('lru-cache');

/**
 * Instantiate the cache
 */

const options = {
  max: 500,
  maxAge: 1000 * 60 * 60 * 60 // 60 minutes
};

const cache = new LRU(options);

/**
 * Expose instance
 */

module.exports = cache;
