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
function deleteDigit(n) {
  let res = []
  const numArr = n.toString().split('')
  for (let i = 0; i < numArr.length; i++) {
    const x = [...numArr]
    x.splice(i, 1)
    res.push([Number(x.join('')), i])
 }
 
 return res.sort((a, b) => b[0] - a[0])[0][0]
}

module.exports = {
  deleteDigit
};
