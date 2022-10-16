const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
class ExtendedRepeater{
  constructor(str ,{repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|'}){
    this.str = String(str)
    this.repeatTimes = repeatTimes
    this.separator = String(separator)
    this.addition = String(addition)
    this.additionRepeatTimes = additionRepeatTimes
    this.additionSeparator = String(additionSeparator)
    this.result = ''
  }
  getResult(){
    this.result = new Array(this.repeatTimes).fill(this.str)
    const subArr = new Array(this.additionRepeatTimes).fill(this.addition)
    this.result = [...this.result].map(e => e += subArr.join(this.additionSeparator)).join(this.separator)
    return this.result
  } 
}

function repeater(str, options) {
  const rep = new ExtendedRepeater(str, options)
  return rep.getResult()
}

module.exports = {
  repeater
};
