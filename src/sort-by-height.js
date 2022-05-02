const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 * filtered = [150, 160, 170, 180, 190]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const filtered = arr.filter(item => item !== -1).sort((a, b) => a - b);
  let index = 0;

  return arr.map(item => {
    if (item === -1) return -1;
    return filtered[index++];
  });
}

module.exports = {
  sortByHeight
};
