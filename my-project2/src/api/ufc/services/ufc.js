'use strict';

/**
 * ufc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ufc.ufc');
