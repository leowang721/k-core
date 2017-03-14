/**
 * @file A simple Class for asynchronous control flow.
 * 
 * @author Leo Wang(leowang721@gmail.com)
 */

'use strict';

let EventTarget = require('./EventTarget');

const MIDDLE_WARE = Symbol('middle-ware');

/**
 * A simple Class for asynchronous control flow.
 * 
 * @class Workflow
 * @extends {EventTarget}
 */
class Workflow extends EventTarget{
    constructor() {
        super();
        this[MIDDLE_WARE] = [];
    }

    use(fn) {
        if (typeof fn !== 'function') {
            throw new Error('middleware must be a function!');
        }
        this[MIDDLE_WARE].push(fn);
        return this;
    }

    get middlewareCount() {
        return this[MIDDLE_WARE].length;
    }

    async work(input) {
        let ctx = {origInput: input, input, output: null};
        try {
            let callback = compose(this[MIDDLE_WARE], ctx);
            await callback();
        }
        catch(e) {
            this.fire('error', e);
        }
        finally {
            return ctx.output;
        }
    }
}

// 定义compose，因为参数的位置变化了，所以下面的执行也要修改一下了
// 最简单的方式，加一个参数
function compose(middlewares, ctx) {
    let i = middlewares.length;
    let next = async function(){};

    // 循环算出来next
    for (let i = middlewares.length - 1; i >=0; i--) {
        next = getCallback(middlewares[i], ctx, next);
    }

    return next;
}

function getCallback(method, ctx, next) {
    return async function() {
        await method(ctx, next);
    };
}

/* global module, exports */
module.exports = exports = Workflow;
