'use strict';

/**
 * Module dependencies.
 */
var errorHandler = require('./errors.server.controller');
var config = require('../../config/config.js');

var textMessages = config.app.textMessage;

/**
 * Show the current message
 */
exports.read = function(req, res) {
    var messageId = req.params.id;
    if(messageId >= 0 && messageId < textMessages.length) {
        res.json(textMessages[messageId]);
    }
    else{
        return res.status(400).send({
            message: "There is no such id"
        });
    }
};

/**
 * Show the random  message
 */
exports.readRandom = function(req, res) {
    var messageId = getRandomInt(0, textMessages.length-1);
    res.json(textMessages[messageId]);
};

/**
 * Get random int
 */
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
