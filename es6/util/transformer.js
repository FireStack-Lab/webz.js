/**
 * convert number to array representing the padded hex form
 * @param  {[string]} val        [description]
 * @param  {[number]} paddedSize [description]
 * @return {[string]}            [description]
 */
const intToByteArray = (val, paddedSize) => {
  const arr = []

  const hexVal = val.toString(16)
  const hexRep = []

  let i
  for (i = 0; i < hexVal.length; i += 1) {
    hexRep[i] = hexVal[i].toString()
  }

  for (i = 0; i < paddedSize - hexVal.length; i += 1) {
    arr.push('0')
  }

  for (i = 0; i < hexVal.length; i += 1) {
    arr.push(hexRep[i])
  }

  return arr
}

const toHex = () => {
  // to be implemented
}
const toUtf8 = () => {
  // to utf 8
}
const toAscii = () => {
  // to be implemented
}
const fromUtf8 = () => {
  // to be implemented
}
const fromAscii = () => {
  // to be implemented
}
const toBN = () => {
  // to be implemented
}
const toNumber = () => {
  // to be implemented
}

export {
  intToByteArray, toHex, toUtf8, toAscii, fromUtf8, fromAscii, toBN, toNumber
}
