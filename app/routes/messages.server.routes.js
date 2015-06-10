'use strict';

/**
 * Module dependencies.
 */
var messages = require('../../app/controllers/messages.server.controller');

module.exports = function(app) {
    // Article Routes
    app.route('/messages')
        .get(messages.readRandom);

    app.route('/messages/:id')
        .get(messages.read);
};