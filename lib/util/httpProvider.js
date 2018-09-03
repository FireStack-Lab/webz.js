'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _validator = require('./validator');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { InvalidProvider } from './errors'
// import errors from 'errors'

var HttpProvider = function HttpProvider(url, timeout, user, password, headers) {
  var _this = this;

  (0, _classCallCheck3.default)(this, HttpProvider);

  this.instance = function () {
    var request = _axios2.default.create();
    if (_this.user && _this.password) {
      var AUTH_TOKEN = 'Basic ' + Buffer.from(_this.user + ':' + _this.password).toString('base64');
      request.defaults.headers.common.Authorization = AUTH_TOKEN;
    }
    request.defaults.headers.post['Content-Type'] = 'application/json';

    if (_this.headers) {
      _this.headers.forEach(function (header) {
        request.defaults.headers.post[header.name] = header.value;
      });
    }
    if (_this.timeout) {
      request.defaults.timeout = _this.timeout;
    }
    return request;
  };

  this.send = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload) {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.instance().post(_this.url, (0, _stringify2.default)(payload)).then(function (response) {
                var data = response.data,
                    status = response.status;

                if (data.result && status === 200) {
                  return data.result;
                }
              }).catch(function (err) {
                return err;
              });

            case 2:
              result = _context.sent;
              return _context.abrupt('return', result);

            case 4:
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

  this.sendServer = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(endpoint, payload) {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.instance().post('' + _this.url + endpoint, (0, _stringify2.default)(payload)).then(function (response) {
                var data = response.data,
                    status = response.status;

                if (data.result && status === 200) {
                  return data.result;
                }
              }).catch(function (err) {
                return err;
              });

            case 2:
              result = _context2.sent;
              return _context2.abrupt('return', result);

            case 4:
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

  this.sendAsync = function (payload, callback) {
    // const request = this.instance()
    // console.log(JSON.stringify(payload))
    _this.instance().post(_this.url, (0, _stringify2.default)(payload)).then(function (response) {
      var data = response.data,
          status = response.status;

      if (data.result && status === 200) {
        callback(null, data.result);
      }
    }).catch(function (err) {
      return callback(err);
    });
  };

  this.sendAsyncServer = function (endpoint, payload, callback) {
    // const request = this.instance()
    // console.log(JSON.stringify(payload))
    _this.instance().post('' + _this.url + endpoint, (0, _stringify2.default)(payload)).then(function (response) {
      var data = response.data,
          status = response.status;

      if (data.result && status === 200) {
        callback(null, data.result);
      }
    }).catch(function (err) {
      return callback(err);
    });
  };

  if ((!(0, _validator.isString)(url) || !(0, _validator.isUrl)(url)) && url !== undefined) {
    throw Error('Provider has to be valid URL');
  }
  this.url = url || _config2.default.defaultProviderUrl;
  this.timeout = timeout || 0;
  this.user = user;
  this.password = password;
  this.headers = headers;
  this.instance();
};

exports.default = HttpProvider;
module.exports = exports.default;