'use strict';

import Promise from '../lib/Promise';
import Bluebird from 'bluebird';
import {expect} from 'chai';

describe("Promise TESTS", () => {
    it('should be Bluebird', () => {
        expect(Promise === Bluebird).to.be.true;
    });
});