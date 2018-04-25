'use strict';

let Promise = require('../Promise');
let Bluebird = require('bluebird');
let expect = require('chai').expect;

describe("Promise TESTS", () => {
    it('should be Bluebird', () => {
        expect(Promise === Bluebird).to.be.true;
    });
});