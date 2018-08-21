'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _jsonRpc = require('./jsonRpc');

var _jsonRpc2 = _interopRequireDefault(_jsonRpc);

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messanger = function Messanger(provider) {
  (0, _classCallCheck3.default)(this, Messanger);

  _initialiseProps.call(this);

  this.provider = provider;
  this.JsonRpc = new _jsonRpc2.default();
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.send = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
      var payload, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.provider) {
                _context.next = 3;
                break;
              }

              console.error((0, _errors.InvalidProvider)());
              return _context.abrupt('return', null);

            case 3:
              payload = _this.JsonRpc.toPayload(data.method, data.params);
              _context.next = 6;
              return _this.provider.send(payload);

            case 6:
              result = _context.sent;
              return _context.abrupt('return', result);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  this.sendAsync = function (data, callback) {
    if (!_this.provider) {
      console.error((0, _errors.InvalidProvider)());
      return null;
    }
    var payload = _this.JsonRpc.toPayload(data.method, data.params);
    _this.provider.sendAsync(payload, function (err, result) {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  };

  this.sendBatch = function (data, callback) {
    if (!_this.provider) {
      console.error((0, _errors.InvalidProvider)());
      return null;
    }

    var payload = _this.JsonRpc.toBatchPayload(data);

    _this.provider.sendAsync(payload, function (err, results) {
      if (err) {
        return callback(err);
      }
      callback(err, results);
    });
  };

  this.sendServer = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(endpoint, data) {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this.provider) {
                _context2.next = 3;
                break;
              }

              console.error((0, _errors.InvalidProvider)());
              return _context2.abrupt('return', null);

            case 3:
              _context2.next = 5;
              return _this.provider.sendServer(endpoint, data);

            case 5:
              result = _context2.sent;
              return _context2.abrupt('return', result);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  this.sendAsyncServer = function (endpoint, data, callback) {
    if (!_this.provider) {
      console.error((0, _errors.InvalidProvider)());
      return null;
    }
    // const payload = this.JsonRpc.toPayload(data.method, data.params)
    _this.provider.sendAsyncServer(endpoint, data, function (err, result) {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  };

  this.sendBatchServer = function (data, callback) {
    if (!_this.provider) {
      console.error((0, _errors.InvalidProvider)());
      return null;
    }
    // const payload = this.JsonRpc.toBatchPayload(data)
    _this.provider.sendAsync(data, function (err, results) {
      if (err) {
        return callback(err);
      }
      callback(err, results);
    });
  };

  this.setProvider = function (provider) {
    _this.provider = provider;
  };
};

exports.default = Messanger;
module.exports = exports.default;