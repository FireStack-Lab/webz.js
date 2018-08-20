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
    var keyArray = (0, _keys2.default)(validatorObject);
    var valueArray = (0, _values2.default)(validatorObject);
    var validatorMethod = validatorArray[valueArray[0][0]];
    if (valueArray[0][1] === 'required') {
      requiredArgs[keyArray[0]] = validatorMethod;
    } else {
      optionalArgs[keyArray[0]] = validatorMethod;
    }

    // for (const index in validatorObject) {
    //   if (index !== undefined) {
    //     console.log(validatorObject)
    //     const validatorText = validatorObject[index]
    //     const keyItem = Object.keys(validatorText)
    //     const valueArray = Object.values(validatorText)
    //     console.log({ keyItem, valueArray })
    //     const validatorMethod = validatorArray[valueArray[0]]
    //     if (valueArray[1] === 'required') {
    //       requiredArgs[keyItem[0]] = validatorMethod
    //     } else {
    //       optionalArgs[keyItem[0]] = validatorMethod
    //     }
    //   }
    // }
    console.log({ requiredArgs: requiredArgs, optionalArgs: optionalArgs });
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