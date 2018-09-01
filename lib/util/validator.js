'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateFunctionArgs = exports.validateArgs = exports.isBN = exports.isAddress = exports.isPrivateKey = exports.isPubkey = exports.isUrl = exports.isHash = exports.isFunction = exports.isObject = exports.isJson = exports.isArray = exports.isBoolean = exports.isString = exports.isNumber = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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
// assign validator string
(0, _assign2.default)(isNumber, { validator: 'Number' });

/**
 * [isString verify param is a String]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isString = function isString(obj) {
  return obj === '' + obj;
};
// assign validator string
(0, _assign2.default)(isString, { validator: 'String' });

/**
 * [isBoolean verify param is a Boolean]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isBoolean = function isBoolean(obj) {
  return obj === !!obj;
};
// assign validator string
(0, _assign2.default)(isBoolean, { validator: 'Boolean' });

/**
 * [isArray verify param input is an Array]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isArray = function isArray(obj) {
  return Array.isArray(obj);
};
// assign validator string
(0, _assign2.default)(isArray, { validator: 'Array' });

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
// assign validator string
(0, _assign2.default)(isJson, { validator: 'Json' });

/**
 * [isObject verify param is an Object]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */
var isObject = function isObject(obj) {
  return obj !== null && !Array.isArray(obj) && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
};
// assign validator string
(0, _assign2.default)(isObject, { validator: 'Object' });

/**
 * [isFunction verify param is a Function]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [description]
 */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
// assign validator string
(0, _assign2.default)(isFunction, { validator: 'Function' });

/**
 * verify if param is correct
 * TODO: 0x is not needed after core team updated
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
};
// assign validator string
(0, _assign2.default)(isAddress, { validator: 'Address' });

/**
 * verify if privateKey is correct
 * TODO: 0x is not needed after core team updated
 * @param  {[hex|string]}  privateKey [description]
 * @return {Boolean}            [description]
 */
var isPrivateKey = function isPrivateKey(privateKey) {
  if (!/^(0x)?[0-9a-f]{64}$/i.test(privateKey)) {
    // check if it has the basic requirements of an privatekey
    return false;
  } else if (/^(0x)?[0-9a-f]{64}$/.test(privateKey) || /^(0x)?[0-9A-F]{64}$/.test(privateKey)) {
    // If it's all small caps or all all caps, return true
    return true;
  }
};
// assign validator string
(0, _assign2.default)(isPrivateKey, { validator: 'PrivateKey' });

/**
 * verify if public key is correct
 *  TODO: 0x is not needed after core team updated
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
// assign validator string
(0, _assign2.default)(isPubkey, { validator: 'PublicKey' });

/**
 * verify if url is correct
 * @param  {[string]}  url [description]
 * @return {Boolean}     [description]
 */
var isUrl = function isUrl(url) {
  return (0, _validUrl.isWebUri)(url);
};
// assign validator string
(0, _assign2.default)(isUrl, { validator: 'Url' });

/**
 * verify if hash is correct
 * TODO: 0x is not needed after core team updated
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
// assign validator string
(0, _assign2.default)(isHash, { validator: 'Hash' });

// isBN
// imported
(0, _assign2.default)(_bn.isBN, { validator: 'BN' });

/**
 * make sure each of the keys in requiredArgs is present in args
 * @param  {[type]} args         [description]
 * @param  {[type]} requiredArgs [description]
 * @param  {[type]} optionalArgs [description]
 * @return {[type]}              [description]
 */
function validateArgs(args, requiredArgs, optionalArgs) {
  for (var key in requiredArgs) {
    if (args[key] !== undefined) {
      for (var i = 0; i < requiredArgs[key].length; i += 1) {
        if (typeof requiredArgs[key][i] !== 'function') throw new Error('Validator is not a function');

        if (!requiredArgs[key][i](args[key])) {
          throw new Error('Validation failed for ' + key + ',should be ' + requiredArgs[key][i].validator);
        }
      }
    } else throw new Error('Key not found: ' + key);
  }

  for (var _key in optionalArgs) {
    if (args[_key]) {
      for (var _i = 0; _i < optionalArgs[_key].length; _i += 1) {
        if (typeof optionalArgs[_key][_i] !== 'function') throw new Error('Validator is not a function');

        if (!optionalArgs[_key][_i](args[_key])) {
          throw new Error('Validation failed for ' + _key + ',should be ' + optionalArgs[_key][_i].validator);
        }
      }
    }
  }
  return true;
}

function validateFunctionArgs(ArgsArray, validatorArray) {
  var argLength = ArgsArray.length;
  var valLength = validatorArray.length;
  if (argLength < valLength) throw new Error('Some args are required by function but missing');
  for (var i = 0; i < valLength; i += 1) {
    if (!validatorArray[i](ArgsArray[i])) {
      throw new Error('Validation failed for arguments[' + i + '], should be ' + validatorArray[i].validator);
    }
  }
  return true;
}

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
exports.validateFunctionArgs = validateFunctionArgs;