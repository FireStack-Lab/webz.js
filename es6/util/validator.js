import { isWebUri } from 'valid-url'

/**
 * [isNumber verify param is a Number]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
const isNumber = (obj) => {
  return obj === +obj
}

/**
 * [isString verify param is a String]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
const isString = (obj) => {
  return obj === `${obj}`
}

/**
 * [isBoolean verify param is a Boolean]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
const isBoolean = (obj) => {
  return obj === !!obj
}

/**
 * [isArray verify param input is an Array]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
const isArray = (obj) => {
  return Array.isArray(obj)
}

/**
 * [isJson verify param input is a Json]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
const isJson = (obj) => {
  try {
    return !!JSON.parse(obj)
  } catch (e) {
    return false
  }
}

/**
 * [isObject verify param is an Object]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
const isObject = (obj) => {
  return obj !== null && !Array.isArray(obj) && typeof obj === 'object'
}
/**
 * [isFunction verify param is a Function]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [description]
 */

const isFunction = (obj) => {
  return typeof obj === 'function'
}

/**
 * verify if param is correct
 * @param  {[hex|string]}  address [description]
 * @return {Boolean}         [description]
 */
const isAddress = (address) => {
  return !!address.match(/^[0-9a-fA-F]{40}$/)
}

/**
 * verify if privateKey is correct
 * @param  {[hex|string]}  privateKey [description]
 * @return {Boolean}            [description]
 */
const isPrivateKey = (privateKey) => {
  return !!privateKey.match(/^[0-9a-fA-F]{64}$/)
}

/**
 * verify if public key is correct
 * @param  {[hex|string]}  pubkey [description]
 * @return {Boolean}        [description]
 */
const isPubkey = (pubkey) => {
  return !!pubkey.match(/^[0-9a-fA-F]{66}$/)
}

/**
 * verify if url is correct
 * @param  {[string]}  url [description]
 * @return {Boolean}     [description]
 */
const isUrl = (url) => {
  return isWebUri(url)
}

/**
 * verify if hash is correct
 * @param  {[string]}  txHash [description]
 * @return {Boolean}        [description]
 */
const isHash = (txHash) => {
  return !!txHash.match(/^[0-9a-fA-F]{64}$/)
}

/**
 * make sure each of the keys in requiredArgs is present in args
 * @param  {[type]} args         [description]
 * @param  {[type]} requiredArgs [description]
 * @param  {[type]} optionalArgs [description]
 * @return {[type]}              [description]
 */
const validateArgs = (args, requiredArgs, optionalArgs) => {
  for (const key in requiredArgs) {
    if (args[key] !== undefined) {
      for (let i = 0; i < requiredArgs[key].length; i += 1) {
        if (typeof requiredArgs[key][i] !== 'function') throw new Error('Validator is not a function')

        if (!requiredArgs[key][i](args[key])) throw new Error(`Validation failed for ${key}`)
      }
    } else throw new Error(`Key not found: ${key}`)
  }

  for (const key in optionalArgs) {
    if (args[key]) {
      for (let i = 0; i < optionalArgs[key].length; i += 1) {
        if (typeof optionalArgs[key][i] !== 'function') throw new Error('Validator is not a function')

        if (!optionalArgs[key][i](args[key])) throw new Error(`Validation failed for ${key}`)
      }
    }
  }
  return true
}

export {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isJson,
  isObject,
  isFunction,
  isHash,
  isUrl,
  isPubkey,
  isPrivateKey,
  isAddress,
  validateArgs
}
