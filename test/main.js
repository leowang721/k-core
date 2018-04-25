'use strict';

let main = require('../main');
let EventTarget = require('../event-target');
let Promise = require('../promise');
let util = require('../util');
let Workflow = require('../workflow');
let expect = require('chai').expect;

describe("main TESTS", () => {
    it('should return correct props', () => {
        expect(main.EventTarget === EventTarget).to.be.true;
        expect(main.Promise === Promise).to.be.true;
        expect(main.util === util).to.be.true;
        expect(main.Workflow === Workflow).to.be.true;
    });
});