import { expect, test } from 'vitest';

import SigmoidKernel from '../index.js';

test('default options', () => {
  const kernel = new SigmoidKernel();

  expect(kernel.compute([1, 1], [1, 1])).toBeCloseTo(-1, 1);
});
