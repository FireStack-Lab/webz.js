'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validUrl = require('valid-url');

var _bcrypto = require('bcrypto');

var _schnorr = require('../schnorr');

var _schnorr2 = _interopRequireDefault(_schnorr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * generate a new private key using the secp256k1 curve
 * returns a Buffer object,
 * @return {Buffer} [description]
 */
var generatePrivateKey = function generatePrivateKey() {
  return _bcrypto.secp256k1.generatePrivateKey();
};

/**
 * verify if the private key is valid for the secp256k1 curve
 * inputs Buffer and returns true/false
 * @param  {Buffer[string|hex]} privateKey [description]
 * @return {Boolean}            [description]
 */
var verifyPrivateKey = function verifyPrivateKey(privateKey) {
  var pKey = void 0;
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    // privateKey = new Buffer(privateKey, 'hex')
    pKey = Buffer.from(privateKey, 'hex');
  } else pKey = privateKey;

  return _bcrypto.secp256k1.privateKeyVerify(pKey);
};

/**
 * get the public address of an account using its private key
 * @param  {[Buffer[string|hex]} privateKey [description]
 * @return {[string]}            [description]
 */
var getAddressFromPrivateKey = function getAddressFromPrivateKey(privateKey) {
  var pKey = void 0;
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(privateKey, 'hex');
  } else pKey = privateKey;

  var pubKey = _bcrypto.secp256k1.publicKeyCreate(pKey, true);
  var pubKeyHash = _bcrypto.sha256.digest(pubKey); // sha256 hash of the public key
  var address = pubKeyHash.toString('hex', 12); // rightmost 160 bits/20 bytes of the hash

  return address;
};

/**
 * get the public key of an account using its private key
 * @param  {Buffer[string|hex]} privateKey [description]
 * @return {[string]}            [description]
 */
var getPubKeyFromPrivateKey = function getPubKeyFromPrivateKey(privateKey) {
  var pKey = void 0;
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(privateKey, 'hex');
  } else pKey = privateKey;

  return _bcrypto.secp256k1.publicKeyCreate(pKey, true);
};

/**
 * Get address from a public key
 * @param  {[hex|string]} pubKey [description]
 * @return {[string]}        [description]
 */
var getAddressFromPublicKey = function getAddressFromPublicKey(pubKey) {
  var pKey = void 0;
  if (typeof pubKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(pubKey, 'hex');
  } else pKey = pubKey;
  var pubKeyHash = _bcrypto.sha256.digest(pKey); // sha256 hash of the public key
  var address = pubKeyHash.toString('hex', 12); // rightmost 160 bits/20 bytes of the hash
  return address;
};

/**
 * construct the transaction json
 * input the privateKey and transaction object
 * @param  {Buffer[string|hex]} privateKey [description]
 * @param  {[Object]} txnDetails [description]
 * @return {[string]}            [description]
 */
var createTransactionJson = function createTransactionJson(privateKey, txnDetails) {
  var pKey = void 0;
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(privateKey, 'hex');
  } else pKey = privateKey;

  var pubKey = _bcrypto.secp256k1.publicKeyCreate(pKey, true);

  var txn = {
    version: txnDetails.version,
    nonce: txnDetails.nonce,
    to: txnDetails.to,
    amount: txnDetails.amount,
    pubKey: pubKey.toString('hex'),
    gasPrice: txnDetails.gasPrice,
    gasLimit: txnDetails.gasLimit,
    code: txnDetails.code || '',
    data: txnDetails.data || ''

    // new Buffer has been deprecated
    // const codeHex = new Buffer(txn.code).toString('hex')
    // const dataHex = new Buffer(txn.data).toString('hex')

  };var codeHex = Buffer.from(txn.code).toString('hex');
  var dataHex = Buffer.from(txn.data).toString('hex');

  var msg = intToByteArray(txn.version, 64).join('') + intToByteArray(txn.nonce, 64).join('') + txn.to + txn.pubKey + intToByteArray(txn.amount, 64).join('') + intToByteArray(txn.gasPrice, 64).join('') + intToByteArray(txn.gasLimit, 64).join('') + intToByteArray(txn.code.length, 8).join('') // size of code
  + codeHex + intToByteArray(txn.data.length, 8).join('') // size of data
  + dataHex;

  // sign using schnorr lib
  var schnorr = new _schnorr2.default();

  // new Buffer has been deprecated
  // const messageHex = new Buffer(msg, 'hex')
  var messageHex = Buffer.from(msg, 'hex');
  var sig = schnorr.sign(messageHex, pKey, pubKey);

  var r = sig.r.toString('hex');
  var s = sig.s.toString('hex');
  while (r.length < 64) {
    r = '0' + r;
  }
  while (s.length < 64) {
    s = '0' + s;
  }
  txn.signature = r + s;

  return txn;
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

/**
 * verify if address is correct
 * @param  {[hex|string]}  address [description]
 * @return {Boolean}         [description]
 */
var isAddress = function isAddress(address) {
  return !!address.match(/^[0-9a-fA-F]{40}$/);
};

/**
 * verify if privateKey is correct
 * @param  {[hex|string]}  privateKey [description]
 * @return {Boolean}            [description]
 */
var isPrivateKey = function isPrivateKey(privateKey) {
  return !!privateKey.match(/^[0-9a-fA-F]{64}$/);
};

/**
 * verify if public key is correct
 * @param  {[hex|string]}  pubkey [description]
 * @return {Boolean}        [description]
 */
var isPubkey = function isPubkey(pubkey) {
  return !!pubkey.match(/^[0-9a-fA-F]{66}$/);
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
  return !!txHash.match(/^[0-9a-fA-F]{64}$/);
};

/**
 * verify if it is number type
 * @param  {[number]}  number [description]
 * @return {Boolean}        [description]
 */
var isNumber = function isNumber(number) {
  return typeof number === 'number';
};

/**
 * verify if it is string
 * @param  {[string]}  string [description]
 * @return {Boolean}        [description]
 */
var isString = function isString(string) {
  return typeof string === 'string';
};

/**
 * convert number to array representing the padded hex form
 * @param  {[string]} val        [description]
 * @param  {[number]} paddedSize [description]
 * @return {[string]}            [description]
 */
var intToByteArray = function intToByteArray(val, paddedSize) {
  var arr = [];

  var hexVal = val.toString(16);
  var hexRep = [];

  var i = void 0;
  for (i = 0; i < hexVal.length; i += 1) {
    hexRep[i] = hexVal[i].toString();
  }

  for (i = 0; i < paddedSize - hexVal.length; i += 1) {
    arr.push('0');
  }

  for (i = 0; i < hexVal.length; i += 1) {
    arr.push(hexRep[i]);
  }

  return arr;
};

exports.default = {
  aes: _bcrypto.aes,
  generatePrivateKey: generatePrivateKey,
  verifyPrivateKey: verifyPrivateKey,
  getAddressFromPrivateKey: getAddressFromPrivateKey,
  getPubKeyFromPrivateKey: getPubKeyFromPrivateKey,
  getAddressFromPublicKey: getAddressFromPublicKey,
  createTransactionJson: createTransactionJson,
  validateArgs: validateArgs,
  isAddress: isAddress,
  isPrivateKey: isPrivateKey,
  isPubkey: isPubkey,
  isUrl: isUrl,
  isHash: isHash,
  isNumber: isNumber,
  isString: isString,
  intToByteArray: intToByteArray
};