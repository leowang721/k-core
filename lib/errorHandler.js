
var eventBus = require('./eventBus');

eventBus.on('error', (e) => console.log(e));

function errorHandler(e) {
    eventBus.emit('error', e);
}

module.exports = errorHandler;
