'use strict';

let Promise = require('../lib/Promise');
let Bluebird = require('bluebird');
var expect = require('chai').expect;

describe("Promise TESTS", () => {
    it('should be Bluebird', () => {
        expect(Promise === Bluebird).to.be.true;
    });
});