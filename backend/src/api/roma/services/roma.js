'use strict';

/**
 * roma service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::roma.roma');
