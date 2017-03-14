'use strict';

import main from '../lib/main';
import EventTarget from '../lib/EventTarget';
import Promise from '../lib/Promise';
import util from '../lib/util';
import Workflow from '../lib/Workflow';
import {expect} from 'chai';

describe("main TESTS", () => {
    it('should return correct props', () => {
        expect(main.EventTarget === EventTarget).to.be.true;
        expect(main.Promise === Promise).to.be.true;
        expect(main.util === util).to.be.true;
        expect(main.Workflow === Workflow).to.be.true;
    });
});