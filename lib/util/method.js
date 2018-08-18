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
    var validatorObject = _this.validator;
    for (var index in validatorObject) {
      console.log(validatorObject[index]);
      console.log(index);
    }
    // if (args && this.params !== 0 && args.length !== this.params) {
    //   throw InvalidNumberOfRPCParams()
    // }
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
      params = options.params,
      validator = options.validator;

  this.name = name;
  this.call = call;
  this.params = params || 0;
  this.messanger = null;
  this.validator = validator;
};

exports.default = Method;