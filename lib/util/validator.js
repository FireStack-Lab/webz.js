'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateArgs = exports.isBN = exports.isAddress = exports.isPrivateKey = exports.isPubkey = exports.isUrl = exports.isHash = exports.isFunction = exports.isObject = exports.isJson = exports.isArray = exports.isBoolean = exports.isString = exports.isNumber = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _validUrl = require('valid-url');

var _bn = require('bn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [isNumber verify param is a Number]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isNumber = function isNumber(obj) {
  return obj === +obj;
};

/**
 * [isString verify param is a String]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isString = function isString(obj) {
  return obj === '' + obj;
};

/**
 * [isBoolean verify param is a Boolean]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isBoolean = function isBoolean(obj) {
  return obj === !!obj;
};

/**
 * [isArray verify param input is an Array]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isArray = function isArray(obj) {
  return Array.isArray(obj);
};

/**
 * [isJson verify param input is a Json]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isJson = function isJson(obj) {
  try {
    return !!JSON.parse(obj);
  } catch (e) {
    return false;
  }
};

/**
 * [isObject verify param is an Object]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isObject = function isObject(obj) {
  return obj !== null && !Array.isArray(obj) && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
};
/**
 * [isFunction verify param is a Function]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [description]
 */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

/**
 * verify if param is correct
 * @param  {[hex|string]}  address [description]
 * @return {Boolean}         [description]
 */
// const isAddress = (address) => {
//   return !!address.match(/^[0-9a-fA-F]{40}$/)
// }

var isAddress = function isAddress(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true;
  }
  // web3.js use checksumAddress
  // else {
  //     // Otherwise check each case
  //     return isChecksumAddress(address)
  // }
};

/**
 * verify if privateKey is correct
 * @param  {[hex|string]}  privateKey [description]
 * @return {Boolean}            [description]
 */
var isPrivateKey = function isPrivateKey(privateKey) {
  if (!/^(0x)?[0-9a-f]{64}$/i.test(privatekey)) {
    // check if it has the basic requirements of an privatekey
    return false;
  } else if (/^(0x)?[0-9a-f]{64}$/.test(privatekey) || /^(0x)?[0-9A-F]{64}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true;
  }
  // return !!privateKey.match(/^[0-9a-fA-F]{64}$/)
};

/**
 * verify if public key is correct
 * @param  {[hex|string]}  pubkey [description]
 * @return {Boolean}        [description]
 */
var isPubkey = function isPubkey(pubkey) {
  if (!/^(0x)?[0-9a-f]{66}$/i.test(pubkey)) {
    // check if it has the basic requirements of an pubkey
    return false;
  } else if (/^(0x)?[0-9a-f]{66}$/.test(pubkey) || /^(0x)?[0-9A-F]{66}$/.test(pubkey)) {
    // If it's all small caps or all all caps, return true
    return true;
  }
  // return !!pubkey.match(/^[0-9a-fA-F]{66}$/)
};

/**
 * verify if url is correct
 * @param  {[string]}  url [description]
 * @return {Boolean}     [description]
 */
var isUrl = function isUrl(url) {
  return (0, _validUrl.isWebUri)(url);
};

/**
 * verify if hash is correct
 * @param  {[string]}  txHash [description]
 * @return {Boolean}        [description]
 */
var isHash = function isHash(txHash) {
  if (!/^(0x)?[0-9a-f]{64}$/i.test(txHash)) {
    // check if it has the basic requirements of an txHash
    return false;
  } else if (/^(0x)?[0-9a-f]{64}$/.test(txHash) || /^(0x)?[0-9A-F]{64}$/.test(txHash)) {
    // If it's all small caps or all all caps, return true
    return true;
  }
  // return !!txHash.match(/^[0-9a-fA-F]{64}$/)
};

/**
 * make sure each of the keys in requiredArgs is present in args
 * @param  {[type]} args         [description]
 * @param  {[type]} requiredArgs [description]
 * @param  {[type]} optionalArgs [description]
 * @return {[type]}              [description]
 */
var validateArgs = function validateArgs(args, requiredArgs, optionalArgs) {
  for (var key in requiredArgs) {
    if (args[key] !== undefined) {
      for (var i = 0; i < requiredArgs[key].length; i += 1) {
        if (typeof requiredArgs[key][i] !== 'function') throw new Error('Validator is not a function');

        if (!requiredArgs[key][i](args[key])) throw new Error('Validation failed for ' + key);
      }
    } else throw new Error('Key not found: ' + key);
  }

  for (var _key in optionalArgs) {
    if (args[_key]) {
      for (var _i = 0; _i < optionalArgs[_key].length; _i += 1) {
        if (typeof optionalArgs[_key][_i] !== 'function') throw new Error('Validator is not a function');

        if (!optionalArgs[_key][_i](args[_key])) throw new Error('Validation failed for ' + _key);
      }
    }
  }
  return true;
};

exports.isNumber = isNumber;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isArray = isArray;
exports.isJson = isJson;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isHash = isHash;
exports.isUrl = isUrl;
exports.isPubkey = isPubkey;
exports.isPrivateKey = isPrivateKey;
exports.isAddress = isAddress;
exports.isBN = _bn.isBN;
exports.validateArgs = validateArgs;