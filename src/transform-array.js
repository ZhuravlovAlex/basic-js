const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @arr = s {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') 
      arr = arr.slice(0, i - 1).concat(arr.slice(i + 2));

    if (arr[i] === '--discard-prev')
    arr = arr.slice(0, i - 2).concat(arr.slice(i + 1));

    if (arr[i] === '--double-next') {
      const _arr =  arr.slice(0, i - 1);
      _arr.push(arr[i + 1]);
      arr = _arr.concat(arr.slice(i + 1));
    }
    

    if (arr[i] === '--double-prev'){
      const _arr =  arr.slice(0, i - 1);
      _arr.push(arr[i - 1]);
      arr = _arr.concat(arr.slice(i + 1));
    }

  }

  return arr;
}

module.exports = {
  transform
};
