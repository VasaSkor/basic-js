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
  let count = 0
  matrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  for (let i = 0; i < matrix.length; i++){
    for(let k = 0; k < matrix[i].length; k++){
        if(matrix[i][k] === 0) break;
        count += matrix[i][k]
    }
}
return count
}

module.exports = {
  getMatrixElementsSum
};
