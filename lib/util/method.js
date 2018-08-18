'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _errors = require('./errors');

var _validator = require('./validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validatorArray = {
  isNumber: [_validator.isNumber],
  isString: [_validator.isString],
  isBoolean: [_validator.isBoolean],
  isArray: [_validator.isArray],
  isJson: [_validator.isJson],
  isObject: [_validator.isObject],
  isFunction: [_validator.isFunction],
  isHash: [_validator.isHash],
  isUrl: [_validator.isUrl],
  isPubkey: [_validator.isPubkey],
  isPrivateKey: [_validator.isPrivateKey],
  isAddress: [_validator.isAddress]
};

var Method = function Method(options) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Method);

  this.setMessanger = function (msg) {
    _this.messanger = msg;
  };

  this.validateArgs = function (args) {
    var validatorObject = _this.params;
    var newValidatorObject = {};
    for (var index in validatorObject) {
      if (index !== undefined) {
        var validatorText = validatorObject[index];
        var validatorMethod = validatorArray[validatorText];
        newValidatorObject[index] = validatorMethod;
      }
    }
    if (args && _this.params !== 0) {
      (0, _validator.validateArgs)(args, newValidatorObject);
    }
    // validateArgs(args)
  };

  this.methodBuilder = function () {
    if (_this.messanger !== null) {
      return function (args, callback) {
        _this.validateArgs(args);
        if (callback) {
          return _this.messanger.sendAsync({ method: _this.call, params: args }, callback);
        }
        return _this.messanger.send({ method: _this.call, params: args });
      };
    }
  };

  var name = options.name,
      call = options.call,
      params = options.params;

  this.name = name;
  this.call = call;
  this.messanger = null;
  this.params = params;
};

exports.default = Method;