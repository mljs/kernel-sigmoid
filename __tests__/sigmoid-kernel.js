'use strict';

const SigmoidKernel = require('..');

describe('sigmoid kernel', function () {
  it('default options', function () {
    const kernel = new SigmoidKernel();
    expect(kernel.compute([1, 1], [1, 1])).toBeCloseTo(-1, 1);
  });
});
