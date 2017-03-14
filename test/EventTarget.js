'use strict';

let EventTarget = require('../lib/EventTarget');
let EventEmitter = require('eventemitter3');
var expect = require('chai').expect;

describe("EventTarget TESTS", () => {
    it('should be extended from EventEmitter', () => {
        let ins = new EventTarget();
        expect(ins).to.be.instanceof(EventEmitter);
    });
    it('should add fire method', () => {
        let ins = new EventTarget();
        let fired = null;
        ins.on('hi', e => {fired = e});
        expect(ins.fire).to.be.a('function');
        ins.fire('hi', 'world');
        expect(fired).to.be.equal('world');
    });
});