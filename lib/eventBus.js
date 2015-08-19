var events = require('events');

class EventBus extends events.EventEmitter {
    constructor(props) {
        super(props);
    }
}

var eventBus = new EventBus();
eventBus.EventBus = EventBus;

module.exports = eventBus;
