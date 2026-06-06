const defaultOptions = {
  alpha: 0.01,
  constant: -Math.E,
};

/**
 * Sigmoid (hyperbolic tangent) kernel.
 */
export class SigmoidKernel {
  /**
   * Create a new sigmoid kernel.
   * @param {object} [options] - Kernel options.
   * @param {number} [options.alpha=0.01] - Value for the alpha factor.
   * @param {number} [options.constant=-Math.E] - Value for the constant.
   */
  constructor(options) {
    options = { ...defaultOptions, ...options };
    this.alpha = options.alpha;
    this.constant = options.constant;
  }

  /**
   * Compute the value of the kernel between two vectors.
   * @param {number[]} x - First vector.
   * @param {number[]} y - Second vector.
   * @returns {number} The dot product between `x` and `y` in feature space.
   */
  compute(x, y) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x[i] * y[i];
    }
    return Math.tanh(this.alpha * sum + this.constant);
  }
}
