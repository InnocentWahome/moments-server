'use strict';

/**
 * quick-note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quick-note.quick-note');
