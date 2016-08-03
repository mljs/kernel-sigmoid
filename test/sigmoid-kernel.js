'use strict';

const SigmoidKernel = require('..');

describe('sigmoid kernel', function () {
    it('default options', function () {
        const kernel = new SigmoidKernel();
        kernel.compute([1, 1], [1, 1]).should.approximately(-1, 0.01);
    });
});
