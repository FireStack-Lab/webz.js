'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JsonRpc = function JsonRpc() {
  var _this = this;

  (0, _classCallCheck3.default)(this, JsonRpc);

  this.toPayload = function (method, params) {
    if (!method) console.error('jsonrpc method should be specified!');

    // advance message ID
    _this.messageId += 1;

    return {
      jsonrpc: '2.0',
      id: _this.messageId,
      method: method,
      params: params || []
    };
  };

  this.toBatchPayload = function (messages) {
    return messages.map(function (message) {
      return _this.toPayload(message.method, message.params);
    });
  };

  this.messageId = 0;
};

exports.default = JsonRpc;