'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _errors = require('./errors');

var _validator = require('./validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function Method(options) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Method);

  this.setMessanger = function (msg) {
    _this.messanger = msg;
  };

  this.validateArgs = function (args) {
    if (args && _this.params !== 0 && args.length !== _this.params) {
      throw (0, _errors.InvalidNumberOfRPCParams)();
    }
    // validateArgs(args)
  };

  this.methodBuilder = function () {
    if (_this.messanger !== null) {
      return function (args, callback) {
        _this.validateArgs(args);
        if (callback) {
          _this.messanger.sendAsync(_this.call, args, callback);
        }
        _this.messanger.send(_this.call, args);
      };
    }
  };

  var name = options.name,
      call = options.call,
      params = options.params;

  this.name = name;
  this.call = call;
  this.params = params || 0;
  this.messanger = null;
};

exports.default = Method;