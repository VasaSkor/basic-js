const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse = true){
    this.isReverse = !isReverse
    this.alphabet  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  }

  encrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!')
    }
      let result = []
      const msg = message.toUpperCase().split('')
      const k = key.toUpperCase().split('')
      let count = 0
      for (let i = 0; i < msg.length; i++) {
        if(!this.alphabet.includes(msg[i])){
          count++
          result.push(msg[i])
          continue 
        }
        const msgIndex = this.alphabet.indexOf(msg[i])
        const keyIndex = this.alphabet.indexOf(getArrElem(k, Math.abs(i - count)))
        result.push(this.calcEncryptLetter(msgIndex, keyIndex))
      }
      if (this.isReverse) {
        return result.reverse().join('')
      }
      return result.join('')
  }

  calcEncryptLetter(mj, kj){
    return getArrElem(this.alphabet , mj + kj % this.alphabet.length)
  }

  calcDecryptLetter(mj, kj){
    return getArrElem(this.alphabet , mj - kj % this.alphabet.length)
  }

  decrypt(encryptedMessage , key) {
    if(!encryptedMessage || !key){
      throw new Error('Incorrect arguments!')
    }
      let result = []
      const msg = encryptedMessage.toUpperCase().split('')
      const k = key.toUpperCase().split('')
      let count = 0
      for (let i = 0; i < msg.length; i++) {
        if(!this.alphabet.includes(msg[i])){
          count++
          result.push(msg[i])
          continue 
        }
        const msgIndex = this.alphabet.indexOf(msg[i])
        const keyIndex = this.alphabet.indexOf(getArrElem(k, Math.abs(i - count)))
        result.push(this.calcDecryptLetter(msgIndex, keyIndex))
      }
      if (this.isReverse) {
        return result.reverse().join('')
      }
      
      return result.join('')
  }
}

function getArrElem(arr, i) {
  const _getArrElem = (arr, i) =>{
    if(i > 0){
      if(arr.at(i) !== undefined) {
        return arr.at(i)
      }
      else{
        return _getArrElem(arr, i - arr.length)
      }
    }
    else{
      if(arr.at(i) !== undefined) {
        return arr.at(i)
      }
      else{
        return _getArrElem(arr, arr.length - i - 1)
      }
    }
  }
  return _getArrElem(arr, i)
}

module.exports = {
  VigenereCipheringMachine
};
