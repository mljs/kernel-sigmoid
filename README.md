# kernel-sigmoid

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Sigmoid (hyperbolic tangent) kernel.  
See http://crsouza.com/2010/03/kernel-functions-for-machine-learning-applications/#sigmoid

## Installation

`npm i ml-kernel-sigmoid`

## Usage

### new SigmoidKernel(options)

**Options**:

- `alpha` - value for the alpha factor (default: 0.01).
- `constant` - value for the constant (default: -Math.E).

### kernel.compute(x, y)

Returns the dot product between `x` and `y` in feature space.

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-kernel-sigmoid.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-kernel-sigmoid
[ci-image]: https://github.com/mljs/kernel-sigmoid/actions/workflows/nodejs.yml/badge.svg?branch=main
[ci-url]: https://github.com/mljs/kernel-sigmoid/actions/workflows/nodejs.yml
[download-image]: https://img.shields.io/npm/dm/ml-kernel-sigmoid.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-kernel-sigmoid
