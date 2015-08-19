/**
 * @file main enterance of k-core
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var main = {
    version: '0.0.1-alpha.2',
    LifeStage: require('./lib/LifeStage'),
    errorHandler: require('./lib/errorHandler'),
    eventBus: require('./lib/eventBus')
};

module.exports = main;
