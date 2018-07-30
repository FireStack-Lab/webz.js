'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncNode = exports.syncNode = undefined;

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

var _asyncNode = require('./asyncNode');

var _asyncNode2 = _interopRequireDefault(_asyncNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.syncNode = _node2.default;
exports.asyncNode = _asyncNode2.default;