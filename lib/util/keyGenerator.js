'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTransactionJson = exports.encodeTransaction = exports.verifyPrivateKey = exports.getAddressFromPublicKey = exports.compressPublicKey = exports.getPubKeyFromPrivateKey = exports.getAddressFromPrivateKey = exports.generatePrivateKey = undefined;

var _randombytes = require('randombytes');

var _randombytes2 = _interopRequireDefault(_randombytes);

var _elliptic = require('elliptic');

var _elliptic2 = _interopRequireDefault(_elliptic);

var _hash = require('hash.js');

var _hash2 = _interopRequireDefault(_hash);

var _schnorr = require('../schnorr');

var schnorr = _interopRequireWildcard(_schnorr);

var _transformer = require('./transformer');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUM_BYTES = 32;
// const HEX_PREFIX = '0x';
var secp256k1 = _elliptic2.default.ec('secp256k1');

/**
 * generatePrivateKey
 *
 * @returns {string} - the hex-encoded private key
 */
var generatePrivateKey = exports.generatePrivateKey = function generatePrivateKey() {
  var priv = '';
  var rand = (0, _randombytes2.default)(NUM_BYTES);

  for (var i = 0; i < rand.byteLength; i += 1) {
    // add 00 in case we get an empty byte.
    var byte = rand[i];
    var hexstr = '00'.concat(byte.toString(16)).slice(-2);
    priv += hexstr;
  }

  return priv;
};

/**
 * getAddressFromPrivateKey
 *
 * takes a hex-encoded string (private key) and returns its corresponding
 * 20-byte hex-encoded address.
 *
 * @param {string} Key
 * @returns {string}
 */
var getAddressFromPrivateKey = exports.getAddressFromPrivateKey = function getAddressFromPrivateKey(privateKey) {
  var keyPair = secp256k1.keyFromPrivate(privateKey, 'hex');
  var pub = keyPair.getPublic(true, 'hex');

  return _hash2.default.sha256().update(pub, 'hex').digest('hex').slice(24);
};

/**
 * getPubKeyFromPrivateKey
 *
 * takes a hex-encoded string (private key) and returns its corresponding
 * hex-encoded 33-byte public key.
 *
 * @param {string} privateKey
 * @returns {string}
 */
var getPubKeyFromPrivateKey = exports.getPubKeyFromPrivateKey = function getPubKeyFromPrivateKey(privateKey) {
  var keyPair = secp256k1.keyFromPrivate(privateKey, 'hex');
  return keyPair.getPublic(true, 'hex');
};

/**
 * compressPublicKey
 *
 * @param {string} publicKey - 65-byte public key, a point (x, y)
 *
 * @returns {string}
 */
var compressPublicKey = exports.compressPublicKey = function compressPublicKey(publicKey) {
  return secp256k1.keyFromPublic(publicKey, 'hex').getPublic(true, 'hex');
};

/**
 * getAddressFromPublicKey
 *
 * takes hex-encoded string and returns the corresponding address
 *
 * @param {string} pubKey
 * @returns {string}
 */
var getAddressFromPublicKey = exports.getAddressFromPublicKey = function getAddressFromPublicKey(pubKey) {
  return _hash2.default.sha256().update(pubKey, 'hex').digest('hex').slice(24);
};

/**
 * verifyPrivateKey
 *
 * @param {string|Buffer} privateKey
 * @returns {boolean}
 */
var verifyPrivateKey = exports.verifyPrivateKey = function verifyPrivateKey(privateKey) {
  var keyPair = secp256k1.keyFromPrivate(privateKey, 'hex');

  var _keyPair$validate = keyPair.validate(),
      result = _keyPair$validate.result;

  return result;
};

/**
 * encodeTransaction
 *
 * @param {any} txn
 * @returns {Buffer}
 */
var encodeTransaction = exports.encodeTransaction = function encodeTransaction(txn) {
  var codeHex = Buffer.from(txn.code).toString('hex');
  var dataHex = Buffer.from(txn.data).toString('hex');

  var encoded = (0, _transformer.intToByteArray)(txn.version, 64).join('') + (0, _transformer.intToByteArray)(txn.nonce, 64).join('') + txn.to + txn.pubKey + txn.amount.toString('hex', 64) + (0, _transformer.intToByteArray)(txn.gasPrice, 64).join('') + (0, _transformer.intToByteArray)(txn.gasLimit, 64).join('') + (0, _transformer.intToByteArray)(txn.code.length, 8).join('') // size of code
  + codeHex + (0, _transformer.intToByteArray)(txn.data.length, 8).join('') // size of data
  + dataHex;

  return Buffer.from(encoded, 'hex');
};

/**
 * createTransactionJson
 *
 * @param {string} privateKey
 * @param {TxDetails} txnDetails
 * @param {TxDetails}
 *
 * @returns {TxDetails}
 */
var createTransactionJson = exports.createTransactionJson = function createTransactionJson(privateKey, txnDetails) {
  var pubKey = getPubKeyFromPrivateKey(privateKey);

  var txn = {
    version: txnDetails.version,
    nonce: txnDetails.nonce,
    to: txnDetails.to,
    amount: txnDetails.amount,
    pubKey: pubKey,
    gasPrice: txnDetails.gasPrice,
    gasLimit: txnDetails.gasLimit,
    code: txnDetails.code || '',
    data: txnDetails.data || ''
  };

  var encodedTx = encodeTransaction(txn);

  // sign using schnorr lib
  var sig = schnorr.sign(encodedTx, Buffer.from(privateKey, 'hex'), Buffer.from(pubKey, 'hex'));

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