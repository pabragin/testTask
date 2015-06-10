'use strict';

/**
 * Module dependencies.
 */
var messages = require('../../app/controllers/messages.server.controller');

module.exports = function(app) {
    // Messages Routing
    app.route('/messages/random')
        .get(messages.readRandom);

    app.route('/messages/:id')
        .get(messages.read);
};