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

var _hash = require('hash.js');

var _hash2 = _interopRequireDefault(_hash);

var _hmacDrbg = require('hmac-drbg');

var _hmacDrbg2 = _interopRequireDefault(_hmacDrbg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _elliptic$ec = _elliptic2.default.ec('secp256k1'),
    curve = _elliptic$ec.curve;

// Public key is a point (x, y) on the curve.
// Each coordinate requires 32 bytes.
// In its compressed form it suffices to store the x co-ordinate
// and the sign for y.
// Hence a total of 33 bytes.


var PUBKEY_COMPRESSED_SIZE_BYTES = 33;

var Schnorr = function Schnorr() {
  var _this = this;

  (0, _classCallCheck3.default)(this, Schnorr);

  this.hash = function (q, pubkey, msg) {
    var sha256 = _hash2.default.sha256();
    var totalLength = PUBKEY_COMPRESSED_SIZE_BYTES * 2 + msg.byteLength;
    // 33 q + 33 pubkey + variable msgLen
    var Q = q.toArrayLike(Buffer, 'be', 33);
    var B = Buffer.allocUnsafe(totalLength);

    Q.copy(B, 0);
    pubkey.copy(B, 33);
    msg.copy(B, 66);

    return new _bn2.default(sha256.update(B).digest('hex'), 16);
  };

  this.trySign = function (msg, prv, k, pn, pubKey) {
    if (prv.isZero()) throw new Error('Bad private key.');

    if (prv.gte(curve.n)) throw new Error('Bad private key.');

    // 1a. check that k is not 0
    if (k.isZero()) return null;
    // 1b. check that k is < the order of the group
    if (k.gte(curve.n)) return null;

    // 2. Compute commitment Q = kG, where g is the base point
    var Q = curve.g.mul(k);
    // convert the commitment to octets first
    var compressedQ = new _bn2.default(Q.encodeCompressed());

    // 3. Compute the challenge r = H(Q || pubKey || msg)
    var r = _this.hash(compressedQ, pubKey, msg);
    var h = r.clone();

    if (h.isZero()) return null;

    if (h.eq(curve.n)) return null;

    // 4. Compute s = k - r * prv
    // 4a. Compute r * prv
    var s = h.imul(prv);
    // 4b. Compute s = k - r * prv mod n
    s = k.isub(s);
    s = s.umod(curve.n);

    if (s.isZero()) return null;

    return new _signature2.default({ r: r, s: s });
  };

  this.sign = function (msg, key, pubkey, pubNonce) {
    var prv = new _bn2.default(key);
    var drbg = _this.getDRBG(msg, key, pubNonce);
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

  this.getDRBG = function (msg, priv, data) {
    var pers = Buffer.allocUnsafe(48);

    pers.fill(0);

    if (data) {
      (0, _assert2.default)(data.length === 32);
      data.copy(pers, 0);
    }

    _this.alg.copy(pers, 32);

    return new _hmacDrbg2.default({
      hash: _hash2.default.sha256,
      entropy: priv,
      nonce: msg,
      pers: pers
    });
  };

  this.generateNoncePair = function (msg, priv, data) {
    var drbg = _this.getDRBG(msg, priv, data);
    var len = curve.n.byteLength();

    var k = new _bn2.default(drbg.generate(len));

    while (k.isZero() && k.gte(curve.n)) {
      k = new _bn2.default(drbg.generate(len));
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