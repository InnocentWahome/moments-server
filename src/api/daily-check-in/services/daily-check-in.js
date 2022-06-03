'use strict';

/**
 * daily-check-in service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-check-in.daily-check-in');
