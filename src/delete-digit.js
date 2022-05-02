const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrayFromN = Array.from(n.toString(), Number);
  //найти минимальное значение в массиве//
  let min = Math.min.apply(null, arrayFromN);
  //удалить это значение из массива//
  return arrayFromN.filter(e => e != min);
}

module.exports = {
  deleteDigit
};
