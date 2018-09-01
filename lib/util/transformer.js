'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var toHex = function toHex() {
  // to be implemented
};
var toUtf8 = function toUtf8() {
  // to utf 8
};
var toAscii = function toAscii() {
  // to be implemented
};
var fromUtf8 = function fromUtf8() {
  // to be implemented
};
var fromAscii = function fromAscii() {
  // to be implemented
};
var toBN = function toBN() {
  // to be implemented
};
var toNumber = function toNumber() {}
// to be implemented


/**
 * Should be called to pad string to expected length
 *
 * @method padLeft
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
;var padLeft = function padLeft(string, chars, sign) {
  return new Array(chars - string.length + 1).join(sign || '0') + string;
};

/**
 * Should be called to pad string to expected length
 *
 * @method padRight
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
var padRight = function padRight(string, chars, sign) {
  return string + new Array(chars - string.length + 1).join(sign || '0');
};

exports.intToByteArray = intToByteArray;
exports.toHex = toHex;
exports.toUtf8 = toUtf8;
exports.toAscii = toAscii;
exports.fromUtf8 = fromUtf8;
exports.fromAscii = fromAscii;
exports.toBN = toBN;
exports.toNumber = toNumber;
exports.padLeft = padLeft;
exports.padRight = padRight;