/**
 * @file A simple Abstract Class of Event, extended from eventemitter3
 * 
 * @author Leo Wang(leowang721@gmail.com)
 */

'use strict';

let EventEmitter = require('eventemitter3');

/**
 * A simple Abstract Class of Event, extended from eventemitter3
 * 
 * @class EventTarget
 * @extends {EventEmitter}
 */
class EventTarget extends EventEmitter {

    /**
     * A sugar for emit
     * @method fire
     */
    fire(...args) {
        return this.emit(...args);
    }
}

/* global module, exports */
module.exports = exports = EventTarget;
