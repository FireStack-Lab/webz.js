'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webz = require('./webz');

var _webz2 = _interopRequireDefault(_webz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Webz === 'undefined') {
  window.Webz = _webz2.default;
}

exports.default = _webz2.default;
module.exports = exports.default;