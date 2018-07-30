'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _elliptic = require('elliptic');

var _elliptic2 = _interopRequireDefault(_elliptic);

var _bn = require('bn.js');

var _bn2 = _interopRequireDefault(_bn);

var _signature = require('elliptic/lib/elliptic/ec/signature');

var _signature2 = _interopRequireDefault(_signature);

var _sha = require('bcrypto/lib/sha256');

var _sha2 = _interopRequireDefault(_sha);

var _drbg = require('bcrypto/lib/drbg');

var _drbg2 = _interopRequireDefault(_drbg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _elliptic$ec = _elliptic2.default.ec('secp256k1'),
    curve = _elliptic$ec.curve;

var Schnorr = function Schnorr() {
  var _this = this;

  (0, _classCallCheck3.default)(this, Schnorr);

  this.hash = function (q, pubkey, msg) {
    var totalLength = 66 + msg.byteLength; // 33 q + 33 pubkey + variable msgLen
    var Q = q.toArrayLike(Buffer, 'be', 33);
    var B = Buffer.allocUnsafe(totalLength);

    Q.copy(B, 0);
    pubkey.copy(B, 33);
    msg.copy(B, 66);

    return new _bn2.default(_sha2.default.digest(B));
  };

  this.trySign = function (msg, prv, k, pn, pubKey) {
    if (prv.isZero()) throw new Error('Bad private key.');

    if (prv.gte(curve.n)) throw new Error('Bad private key.');

    if (k.isZero()) return null;

    if (k.gte(curve.n)) return null;

    var Q = curve.g.mul(k);
    var compressedQ = new _bn2.default(Q.encodeCompressed());

    var r = _this.hash(compressedQ, pubKey, msg);
    var h = r.clone();

    if (h.isZero()) return null;

    if (h.gte(curve.n)) return null;

    var s = h.imul(prv);
    s = k.isub(s);
    s = s.umod(curve.n);

    if (s.isZero()) return null;

    return new _signature2.default({ r: r, s: s });
  };

  this.sign = function (msg, key, pubkey, pubNonce) {
    var prv = new _bn2.default(key);

    var drbg = _this.drbg(msg, key, pubNonce);
    var len = curve.n.byteLength();

    var pn = void 0;
    if (pubNonce) pn = curve.decodePoint(pubNonce);

    var sig = void 0;
    while (!sig) {
      var k = new _bn2.default(drbg.generate(len));
      sig = _this.trySign(msg, prv, k, pn, pubkey);
    }

    return sig;
  };

  this.verify = function (msg, signature, key) {
    var sig = new _signature2.default(signature);

    if (sig.s.gte(curve.n)) throw new Error('Invalid S value.');

    if (sig.r.gt(curve.n)) throw new Error('Invalid R value.');

    var kpub = curve.decodePoint(key);
    var l = kpub.mul(sig.r);
    var r = curve.g.mul(sig.s);

    var Q = l.add(r);
    var compressedQ = new _bn2.default(Q.encodeCompressed());

    var r1 = _this.hash(compressedQ, key, msg);

    if (r1.gte(curve.n)) throw new Error('Invalid hash.');

    if (r1.isZero()) throw new Error('Invalid hash.');

    return r1.eq(sig.r);
  };

  this.alg = Buffer.from('Schnorr+SHA256  ', 'ascii');

  this.drbg = function (msg, priv, data) {
    var pers = Buffer.allocUnsafe(48);
    pers.fill(0);

    if (data) {
      (0, _assert2.default)(data.length === 32);
      data.copy(pers, 0);
    }

    _this.alg.copy(pers, 32);
    // CAUTION! DRBG Class is different in latest bcrypto library
    // if using latest DRBG libs, we have to make it like this:
    // const drbgResult = new DRBG(sha256, 32, priv, msg, pers)
    var drbgResult = new _drbg2.default(_sha2.default, priv, msg, pers);
    return drbgResult;
  };

  this.generateNoncePair = function (msg, priv, data) {
    var drbg = _this.drbg(msg, priv, data);
    var len = curve.n.byteLength();

    var k = null;

    for (;;) {
      k = new _bn2.default(drbg.generate(len));

      if (k.isZero()) continue;

      if (k.gte(curve.n)) continue;

      break;
    }

    return Buffer.from(curve.g.mul(k).encode('array', true));
  };
}
/**
 * Hash (r | M).
 * @param {Buffer} msg
 * @param {BN} r
 * @returns {Buffer}
 */

/**
 * Sign message.
 * @private
 * @param {Buffer} msg
 * @param {BN} priv
 * @param {BN} k
 * @param {Buffer} pn
 * @returns {Signature|null}
 */

/**
 * Sign message.
 * @param {Buffer} msg
 * @param {Buffer} key
 * @param {Buffer} pubNonce
 * @returns {Signature}
 */

/**
 * Verify signature.
 * @param {Buffer} msg
 * @param {Buffer} signature
 * @param {Buffer} key
 * @returns {Buffer}
 */

/**
 * Schnorr personalization string.
 * @const {Buffer}
 */

/**
 * Instantiate an HMAC-DRBG.
 * @param {Buffer} msg
 * @param {Buffer} priv
 * @param {Buffer} data
 * @returns {DRBG}
 */

/**
 * Generate pub+priv nonce pair.
 * @param {Buffer} msg
 * @param {Buffer} priv
 * @param {Buffer} data
 * @returns {Buffer}
 */

;

exports.default = Schnorr;