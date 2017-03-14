'use strict';

let main = require('../lib/main');
let EventTarget = require('../lib/EventTarget');
let Promise = require('../lib/Promise');
let util = require('../lib/util');
let Workflow = require('../lib/Workflow');
var expect = require('chai').expect;

describe("main TESTS", () => {
    it('should return correct props', () => {
        expect(main.EventTarget === EventTarget).to.be.true;
        expect(main.Promise === Promise).to.be.true;
        expect(main.util === util).to.be.true;
        expect(main.Workflow === Workflow).to.be.true;
    });
});