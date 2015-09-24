'use strict';

/**
 * Dependencies
 */

const Promise = require('pinkie-promise');
const cache = require('./cache');
const geocoder = require('node-geocoder')('google', 'http', {});

/**
 * Takes an address and returns the coordinates
 */

module.exports = name => {
  const cached = cache.get(name);
  if (cached) {
    return Promise.resolve(cached);
  } else {
    return geocoder.geocode(name)
    .then((data) => {
      cache.set(name, data);
      return data;
    });
  }
};

