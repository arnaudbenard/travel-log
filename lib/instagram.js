'use strict';

/**
 * Dependencies
 */

const promisify = require('pify');
const instagram = require('instagram-node').instagram();
const fetchMyMedia = promisify(instagram.user_self_media_recent);

/**
 * Expose feed function
 */

module.exports.myMedia = myMedia;

/**
 * Initialize client
 */

instagram.use({
  access_token: process.env.INSTAGRAM_ACCESS_TOKEN
});

/**
 * Return photos of your own myMedia
 */

function myMedia () {
  return fetchMyMedia({});
}
