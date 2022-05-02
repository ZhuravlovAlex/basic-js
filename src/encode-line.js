const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const obj = {};  
  [...new Set(str)].map(u => {
    obj[u] = 0;
  });

  let result = '';
  for (let i = 0; i < str.length; i++) obj[str[i]] += 1;
  for (let key in obj) result += `${key}${obj[key]}`;


  return result;
}

module.exports = {
  encodeLine
};
