'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _jsonPpc = require('./jsonPpc');

var _jsonPpc2 = _interopRequireDefault(_jsonPpc);

var _errors = require('./errors');

var _validator = require('./validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messanger = function Messanger(provider) {
  (0, _classCallCheck3.default)(this, Messanger);

  _initialiseProps.call(this);

  this.provider = provider;
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.send = function (data) {
    if (!_this.provider) {
      console.error((0, _errors.InvalidProvider)());
      return null;
    }
    var payload = _jsonPpc2.default.toPayload(data.method, data.params);
    var result = _this.provider.send(payload);

    if (!_jsonPpc2.default.isValidResponse(result)) {
      throw (0, _errors.InvalidResponse)(result);
    }

    return result.result;
  };

  this.sendAsync = function (data, callback) {
    if (!_this.provider) {
      console.error((0, _errors.InvalidProvider)());
      return null;
    }
    var payload = _jsonPpc2.default.toPayload(data.method, data.params);
    _this.provider.sendAsync(payload, function (err, result) {
      if (err) {
        return callback(err);
      }

      if (!_jsonPpc2.default.isValidResponse(result)) {
        return callback((0, _errors.InvalidResponse)(result));
      }

      callback(null, result.result);
    });
  };

  this.sendBatch = function (data, callback) {
    if (!_this.provider) {
      return callback((0, _errors.InvalidProvider)());
    }

    var payload = _jsonPpc2.default.toBatchPayload(data);

    _this.provider.sendAsync(payload, function (err, results) {
      if (err) {
        return callback(err);
      }

      if (!(0, _validator.isArray)(results)) {
        return callback((0, _errors.InvalidResponse)(results));
      }

      callback(err, results);
    });
  };

  this.setProvider = function (provider) {
    _this.provider = provider;
  };
};

exports.default = Messanger;