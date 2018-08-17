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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import errors from 'errors'

var HttpProvider = function HttpProvider(url, timeout, user, password, headers) {
  var _this = this;

  (0, _classCallCheck3.default)(this, HttpProvider);

  this.instance = function () {
    if (_this.user && _this.password) {
      var AUTH_TOKEN = 'Basic ' + Buffer.from(_this.user + ':' + _this.password).toString('base64');
      _this.request.defaults.headers.common.Authorization = AUTH_TOKEN;
    }
    _this.request.defaults.headers.post['Content-Type'] = 'application/json';

    if (_this.headers) {
      _this.headers.forEach(function (header) {
        _this.request.defaults.headers.post[header.name] = header.value;
      });
    }
  };

  this.send = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload) {
      var response;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.request(_qs2.default.stringify(payload));

            case 3:
              response = _context.sent;

              console.log(response.data);
              console.log(response.status);
              console.log(response.statusText);
              console.log(response.headers);
              console.log(response.config);
              return _context.abrupt('return', response);

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              if (_context.t0.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(_context.t0.response.data);
                console.log(_context.t0.response.status);
                console.log(_context.t0.response.headers);
              } else if (_context.t0.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(_context.t0.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', _context.t0.message);
              }
              console.log(_context.t0.config);

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  this.sendAsync = function (payload, callback) {
    // const request = this.instance()
    _this.request(_qs2.default.stringify(payload)).then(function (response) {
      callback(response);
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
  this.request = _axios2.default.create();
  this.instance();
};

exports.default = HttpProvider;