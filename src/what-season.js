const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date && !isNaN(date))) throw new Error('Invalid date!');
 
  const month = date.getMonth() + 1;
  if (typeof date.getMonth() !== 'number') throw new Error('Invalid date!');

  if ([3, 4, 5].includes(month)) return "spring";
  if ([6, 7, 8].includes(month)) return "summer";
  if ([9, 10, 11].includes(month)) return "fall";
  return "winter";
}

module.exports = {
  getSeason
};
