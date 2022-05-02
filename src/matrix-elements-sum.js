const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');//
  
  if(!Array.isArray(matrix)) return false;

  let sumElements = 0;
  // for (let i = 0; i < matrix.length; i++) {
  //   let rowElements = matrix[i];
  //   for (let pos = 0; pos < rowElements; pos++) {
  //     if (rowElements[pos] === 0) {

  //       if (i + 1 < matrix.length) 
  //         matrix[i +1][pos] = 0;

  //     } else {
  //       sumElements += rowElements[pos];
  //     }
  //   } 
  // }

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) break;
      sumElements += matrix[j][i];
    }
  }
  
    return sumElements;
}



module.exports = {
  getMatrixElementsSum
};
