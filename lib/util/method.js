'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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
  isBN: [_validator.isBN],
  isAddress: [_validator.isAddress]
};

var Method = function Method(options) {
  (0, _classCallCheck3.default)(this, Method);

  _initialiseProps.call(this);

  var name = options.name,
      call = options.call,
      params = options.params,
      endpoint = options.endpoint;

  this.name = name;
  this.call = call;
  this.messanger = null;
  this.params = params;
  this.endpoint = endpoint || 'client';
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.setMessanger = function (msg) {
    _this.messanger = msg;
  };

  this.generateValidateObjects = function () {
    var validatorObject = _this.params;

    var requiredArgs = {};
    var optionalArgs = {};
    for (var index in validatorObject) {
      if (index !== undefined) {
        var newObjectKey = index;
        var newObjectValid = validatorObject[index][0];
        var isRequired = validatorObject[index][1];
        if (isRequired === 'required') {
          requiredArgs[newObjectKey] = validatorArray[newObjectValid];
        } else {
          optionalArgs[newObjectKey] = validatorArray[newObjectValid];
        }
      }
    }
    return { requiredArgs: requiredArgs, optionalArgs: optionalArgs };
  };

  this.validateArgs = function (args, requiredArgs, optionalArgs) {
    var reArgs = requiredArgs === undefined ? {} : requiredArgs;
    var opArgs = optionalArgs === undefined ? {} : optionalArgs;
    // console.log({ reArgs, opArgs })
    if (args && _this.params !== {}) {
      return (0, _validator.validateArgs)(args, reArgs, opArgs);
    }
    return true;
  };

  this.extractParams = function (args) {
    var paramsObject = (0, _validator.isObject)(args) ? args : {};
    var result = void 0;
    var keyArrayLength = (0, _keys2.default)(paramsObject).length;

    if (keyArrayLength === 0) result = [];else if (keyArrayLength === 1) {
      var resultKey = (0, _keys2.default)(paramsObject)[0];
      result = [paramsObject[resultKey]];
    } else if (keyArrayLength > 1) {
      result = [paramsObject];
    }
    return result;
  };

  this.assignToObject = function (object) {
    var newObject = {};
    newObject[_this.name] = _this.methodBuilder();
    return (0, _assign2.default)(object, newObject);
  };

  this.methodBuilder = function () {
    if (_this.messanger !== null && _this.endpoint === 'client') {
      return function (args, callback) {
        var _generateValidateObje = _this.generateValidateObjects(),
            requiredArgs = _generateValidateObje.requiredArgs,
            optionalArgs = _generateValidateObje.optionalArgs;

        _this.validateArgs(args, requiredArgs, optionalArgs);
        var params = _this.extractParams(args);
        if (callback) {
          return _this.messanger.sendAsync({ method: _this.call, params: params }, callback);
        }
        return _this.messanger.send({ method: _this.call, params: params });
      };
    }
    if (_this.messanger !== null && _this.endpoint !== 'client') {
      return function (args, callback) {
        var _generateValidateObje2 = _this.generateValidateObjects(),
            requiredArgs = _generateValidateObje2.requiredArgs,
            optionalArgs = _generateValidateObje2.optionalArgs;

        _this.validateArgs(args, requiredArgs, optionalArgs);
        if (callback) {
          return _this.messanger.sendAsyncServer(_this.endpoint, args, callback);
        }
        return _this.messanger.sendServer(_this.endpoint, args);
      };
    }
  };
};

exports.default = Method;
module.exports = exports.default;