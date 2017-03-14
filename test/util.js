'use strict';

let util = require('../lib/util');
let expect = require('chai').expect;

describe("util TESTS", () => {
    it('should return correct APIs', () => {
        expect(util.guid).to.be.a('function');
        expect(util.uid).to.be.a('function');
    });
    it('should get corrent guid', () => {
        let id = util.guid();
        expect(id.length).to.be.equal(36);
        let arr = id.split('-');
        expect(arr.length).to.be.equal(5);
        expect(arr[0]).to.be.equal('4b534c46');
        expect(arr[1].length).to.be.equal(4);
        expect(arr[2].length).to.be.equal(4);
        expect(arr[3].length).to.be.equal(4);
        expect(arr[2][0]).to.be.equal('4');
        expect(arr[4].length).to.be.equal(12);
        expect(/4b534c46[a-f\d\-]+/.test(id)).to.be.true;
    });
    it('should get correct uid', () => {
        let id = util.uid();
        let id2 = util.uid();
        expect(id.length).to.be.equal(16);
        expect(id === id2).to.be.false;
    });
});