'use strict';

let Workflow = require('../lib/Workflow');
let expect = require('chai').expect;

describe("Workflow TESTS", () => {
    it('should return correct APIs', () => {
        let worker = new Workflow();

        expect(worker.use).to.be.a('function');
        expect(typeof worker.work).to.be.equal('function');  // 实际上是个async function
        expect(worker.middlewareCount).to.be.a('number');
    });

    it('should be able to add middleware and get count num correctly', () => {
        let worker = new Workflow();
        worker.use((data, next) => {});

        expect(worker.middlewareCount).to.be.equal(1);
    });

    it('should execute middlewares in direct order', () => {
        let worker = new Workflow();
        worker.use(async (ctx, next) => {
            ctx.output = '';
            ctx.output += 'a';
            await next();
        });
        worker.use(async (ctx, next) => {
            ctx.output += 'b';
            await next();
        });
        worker.use(async (ctx, next) => {
            ctx.output += 'c';
            await next();
        });

        return worker.work('').then(res => {
            expect(res).to.be.equal('abc');
        });
    });

    it('should be about to use await to do sth after all middlewares\' work', () => {
        let worker = new Workflow();
        worker.use(async (ctx, next) => {
            ctx.output = '';
            ctx.output += 'a';
            await next();
            ctx.output += 'b';
        });
        worker.use(async (ctx, next) => {
            ctx.output += 'c';
            await next();
            ctx.output += 'd';
        });
        return worker.work('').then(res => {
            expect(res).to.be.equal('acdb');
        });
    });

    it('should throw a Error if use\' param is not a function', () => {
        let worker = new Workflow();
        expect(() => worker.use('aa')).to.throw('middleware must be a function!');
    });

    it('should stop immediately if a middleware throws an Error, but resolved with current result & error event fired', () => {
        let worker = new Workflow();
        worker.use(async (ctx, next) => {
            ctx.output = '';
            ctx.output += 'a';
            await next();
            ctx.output += 'b';
        });
        worker.use(async (ctx, next) => {
            ctx.output += 'c';
            throw new Error('Oh! no!');
            ctx.output += 'd';
        });
        let fired = false;
        worker.on('error', e => fired = true);
        return worker.work('').then(res => {
            expect(res).to.be.equal('ac');
            expect(fired).to.be.true;
        });
    });
});