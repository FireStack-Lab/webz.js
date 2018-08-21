'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidNumberOfRPCParams = exports.InvalidProvider = exports.InvalidConnection = exports.InvalidResponse = exports.ConnectionTimeout = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectionTimeout = function ConnectionTimeout(ms) {
  return new Error('CONNECTION TIMEOUT: timeout of ' + ms + ' ms achived');
};
var InvalidNumberOfRPCParams = function InvalidNumberOfRPCParams() {
  return new Error('Invalid number of input parameters to RPC method');
};

var InvalidConnection = function InvalidConnection(host) {
  return new Error('CONNECTION ERROR: Couldn\'t connect to node ' + host + '.');
};
var InvalidProvider = function InvalidProvider() {
  return new Error('Provider not set or invalid');
};
var InvalidResponse = function InvalidResponse(result) {
  var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + (0, _stringify2.default)(result);
  return new Error(message);
};

exports.ConnectionTimeout = ConnectionTimeout;
exports.InvalidResponse = InvalidResponse;
exports.InvalidConnection = InvalidConnection;
exports.InvalidProvider = InvalidProvider;
exports.InvalidNumberOfRPCParams = InvalidNumberOfRPCParams;