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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var response, data, status;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.axios.post(_this.url, (0, _stringify2.default)(payload));

            case 3:
              response = _context.sent;
              data = response.data, status = response.status;
              // console.log({ data, status })

              if (!(data.result && status === 200)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', data.result);

            case 7:
              _context.next = 20;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);

              if (!_context.t0.response) {
                _context.next = 15;
                break;
              }

              return _context.abrupt('return', _context.t0.response);

            case 15:
              if (!_context.t0.request) {
                _context.next = 19;
                break;
              }

              return _context.abrupt('return', _context.t0.request);

            case 19:
              return _context.abrupt('return', _context.t0.message);

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  this.sendAsync = function (payload, callback) {
    // const request = this.instance()
    // console.log(JSON.stringify(payload))
    _this.axios.post(_this.url, (0, _stringify2.default)(payload)).then(function (response) {
      var data = response.data,
          status = response.status;

      if (data.result && status === 200) {
        callback(null, data.result);
      }
    }).catch(function (err) {
      return callback(err);
    });
  };

  this.isConnected = function () {
    try {
      _this.send({
        id: 1,
        jsonrpc: '2.0',
        method: 'GetNetworkId',
        params: []
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  this.url = url || 'http://localhost:4200';
  this.timeout = timeout || 0;
  this.user = user;
  this.password = password;
  this.headers = headers;
  this.axios = this.instance();
};

exports.default = HttpProvider;