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
  let s = ''
  const arr = str.split('')
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      s += arr[i]
      if (s === '') {
        res.push('')
      } else {
        res.push(s)
      }
      s = ''
      continue
    }

    s += arr[i]
  }

  return res.map(e => `${e.length > 1 ? e.length : ''}${e.split('')[0]}`).join('')
}

module.exports = {
  encodeLine
};
