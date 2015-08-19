/**
 * @file A simple life stage transfer helper Class
 * @author Leo Wang(wangkemiao@baidu.com)
 */

var events = require('events');

/**
 * DEFAULT_STAGES
 * @private
 * @type {Array}
 */

var DEFAULT_STAGES = [
    'NEW', 'INITED', 'RENDERED', 'REPAINTED', 'DISPOSED'
];

class LifeStage extends events.EventEmitter {

    /**
     * A simple life stage transfer helper Class
     * with defined stages: ['NEW', 'INITED', 'RENDERED', 'REPAINTED', 'DISPOSED']
     *
     * LifeStage should be bound to another Class which I call Host Class, it can not be used independently.
     * When a stage transfer occurred, will trigger a custom event which has the same name as the target stage but lowercased.
     * if a on[Event] method exsits in Host Class, it will be called.
     *
     * use method next to transfer stage.
     * use method switchTo to transfer stage.
     * use method current to get current stage.
     * use method is to check whether current stage is some key.
     *
     * @class LifeStage
     * @constructor
     * @param {Object=} options options
     * @param {Array=} options.stages custom life stages
     */
    constructor(options) {

        super(options);

        options = options || {};

        var me = this;

        var handlers = getLifeStageHandler(options.stages);
        var determintToTriggerEvent = function (data) {
            var currentStage = handlers.current();
            if (data.from != currentStage) {
                me.emit('transfer', Object.assign({}, data, {to: handlers.current()}));
                me.emit(currentStage.toLowerCase(), data);
                if (me.host) {
                    var methodName = 'on' + currentStage.charAt(0).toUpperCase() + currentStage.substring(1);
                    if (typeof me.host[methodName] === 'function') {
                        me.host[methodName](data);
                    }
                }
            }
        };

        me.next = function () {
            var data = {
                from: handlers.current()
            };

            handlers.next();
            determintToTriggerEvent(data);
        };

        me.switchTo = function (target) {
            var data = {
                from: handlers.current()
            };
            handlers.switchTo(target);
            determintToTriggerEvent(data);
        };

        me.current = handlers.current;
        me.is = handlers.is;
    }

    setHost(target) {
        this.host = target;
    }
};

function getLifeStageHandler(lifeStages) {
    lifeStages = lifeStages || DEFAULT_STAGES;

    var keyMapper = {};
    var valueMapper = {};
    lifeStages.forEach(function (eachStage, index) {
        var value = 1 << index;
        keyMapper[eachStage] = value;
        valueMapper[value] = eachStage;
    });

    var current = 1;

    return {
        next: function () {
            var target = current << 1;
            if (valueMapper[target]) {
                current = target;
            }
        },
        switchTo: function (targetKey) {
            var targetValue = keyMapper[targetKey];
            if (targetValue) {
                current = targetValue;
            }
        },
        current: function () {
            return valueMapper[current];
        },
        is: function (key) {
            return current === keyMapper[key];
        }
    }
}

module.exports = LifeStage;
