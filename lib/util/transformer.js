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
var toNumber = function toNumber() {
  // to be implemented
};

exports.intToByteArray = intToByteArray;
exports.toHex = toHex;
exports.toUtf8 = toUtf8;
exports.toAscii = toAscii;
exports.fromUtf8 = fromUtf8;
exports.fromAscii = fromAscii;
exports.toBN = toBN;
exports.toNumber = toNumber;