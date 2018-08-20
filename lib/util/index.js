'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypto = require('bcrypto');

var _schnorr = require('../schnorr');

var _schnorr2 = _interopRequireDefault(_schnorr);

var _validator = require('./validator');

var _transformer = require('./transformer');

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

  var msg = (0, _transformer.intToByteArray)(txn.version, 64).join('') + (0, _transformer.intToByteArray)(txn.nonce, 64).join('') + txn.to + txn.pubKey + (0, _transformer.intToByteArray)(txn.amount, 64).join('') + (0, _transformer.intToByteArray)(txn.gasPrice, 64).join('') + (0, _transformer.intToByteArray)(txn.gasLimit, 64).join('') + (0, _transformer.intToByteArray)(txn.code.length, 8).join('') // size of code
  + codeHex + (0, _transformer.intToByteArray)(txn.data.length, 8).join('') // size of data
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

exports.default = {
  // algos
  aes: _bcrypto.aes,
  // key gen and verify
  generatePrivateKey: generatePrivateKey,
  verifyPrivateKey: verifyPrivateKey,
  // get pub/address from key pairs
  getAddressFromPrivateKey: getAddressFromPrivateKey,
  getPubKeyFromPrivateKey: getPubKeyFromPrivateKey,
  getAddressFromPublicKey: getAddressFromPublicKey,
  // create transaction
  createTransactionJson: createTransactionJson,
  // transformer
  intToByteArray: _transformer.intToByteArray,
  toHex: _transformer.toHex,
  toUtf8: _transformer.toUtf8,
  toAscii: _transformer.toAscii,
  fromUtf8: _transformer.fromUtf8,
  fromAscii: _transformer.fromAscii,
  // validator
  isNumber: _validator.isNumber,
  isString: _validator.isString,
  isBoolean: _validator.isBoolean,
  isArray: _validator.isArray,
  isJson: _validator.isJson,
  isObject: _validator.isObject,
  isFunction: _validator.isFunction,
  isHash: _validator.isHash,
  isUrl: _validator.isUrl,
  isPubkey: _validator.isPubkey,
  isPrivateKey: _validator.isPrivateKey,
  isAddress: _validator.isAddress,
  isBN: _validator.isBN,
  validateArgs: _validator.validateArgs
};