'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverAjax = exports.rpcAjax = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rpcAjax = function rpcAjax(url, method, params, cb) {
  return (0, _nodeFetch2.default)(url, {
    body: (0, _stringify2.default)({
      jsonrpc: '2.0',
      method: method,
      params: [params],
      id: 1
    }),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log({ cb: cb });
    return cb !== undefined && typeof cb === 'function' ? cb(null, data) : data ? data.result : null;
  }).catch(function (error) {
    return cb !== undefined && typeof cb === 'function' ? cb(error) : error;
  });
};

var serverAjax = function serverAjax(url, body, cb) {
  return (0, _nodeFetch2.default)(url, {
    body: (0, _stringify2.default)(body),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return cb !== undefined && typeof cb === 'function' ? cb(null, data) : data ? data.result : null;
  }).catch(function (error) {
    return cb !== undefined && typeof cb === 'function' ? cb(error) : error;
  });
};

exports.rpcAjax = rpcAjax;
exports.serverAjax = serverAjax;