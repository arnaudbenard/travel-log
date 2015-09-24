'use strict';

/**
 * Dependencies
 */

const LRU = require('lru-cache');

/**
 * Expose get/set functions
 */

module.exports.get = get;
module.exports.set = set;

/**
 * Instantiate the cache
 */

const options = {
  max: 500,
  maxAge: 1000 * 60 * 60 * 60 // 60 minutes
};
const cache = new LRU(options);

function get (key) {
  return cache.get(key);
}

function set (key, value) {
  return cache.set(key, value);
}
