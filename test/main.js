'use strict';

let main = require('../main');
let EventTarget = require('../EventTarget');
let Promise = require('../Promise');
let util = require('../util');
let Workflow = require('../Workflow');
let expect = require('chai').expect;

describe("main TESTS", () => {
    it('should return correct props', () => {
        expect(main.EventTarget === EventTarget).to.be.true;
        expect(main.Promise === Promise).to.be.true;
        expect(main.util === util).to.be.true;
        expect(main.Workflow === Workflow).to.be.true;
    });
});