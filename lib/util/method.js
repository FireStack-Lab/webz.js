'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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
  (0, _classCallCheck3.default)(this, Method);

  _initialiseProps.call(this);

  var name = options.name,
      call = options.call,
      params = options.params;

  this.name = name;
  this.call = call;
  this.messanger = null;
  this.params = params;
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.setMessanger = function (msg) {
    _this.messanger = msg;
  };

  this.validateArgs = function (args) {
    var validatorObject = _this.params;
    var requiredArgs = {};
    var optionalArgs = {};
    for (var index in validatorObject) {
      if (index !== undefined) {
        var validatorText = validatorObject[index];
        var keyItem = (0, _keys2.default)(validatorText);
        var valueArray = (0, _values2.default)(validatorText);
        var validatorMethod = validatorArray[valueArray[0]];
        if (valueArray[1] === 'required') {
          requiredArgs[keyItem] = validatorMethod;
        } else {
          optionalArgs[keyItem] = validatorMethod;
        }
      }
    }
    if (args && _this.params !== {}) {
      (0, _validator.validateArgs)(args, requiredArgs, optionalArgs);
    }

    // validateArgs(args)
  };

  this.extractParams = function (args) {
    var paramsObject = (0, _validator.isObject)(args) ? args : {};
    var result = void 0;
    var keyArrayLength = (0, _keys2.default)(paramsObject).length;

    if (keyArrayLength === 0) result = [];else if (keyArrayLength === 1) {
      var resultKey = (0, _keys2.default)(paramsObject)[0];
      result = paramsObject[resultKey];
    } else if (keyArrayLength > 1) {
      result = paramsObject;
    }
    return result;
  };

  this.methodBuilder = function () {
    if (_this.messanger !== null) {
      return function (args, callback) {
        _this.validateArgs(args);
        var params = _this.extractParams(args);
        if (callback) {
          return _this.messanger.sendAsync({ method: _this.call, params: params }, callback);
        }
        return _this.messanger.send({ method: _this.call, params: params });
      };
    }
  };
};

exports.default = Method;