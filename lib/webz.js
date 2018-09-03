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

var _util = require('./util');

var util = _interopRequireWildcard(_util);

var _httpProvider = require('./util/httpProvider');

var _httpProvider2 = _interopRequireDefault(_httpProvider);

var _messanger = require('./util/messanger');

var _messanger2 = _interopRequireDefault(_messanger);

var _zil = require('./zil');

var _zil2 = _interopRequireDefault(_zil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//  Copyright
//
//
//

var Webz = function Webz(args) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Webz);
  this.providers = {
    HttpProvider: _httpProvider2.default
  };
  this.config = util.config;
  this.isConnected = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.zil.isConnected();

          case 2:
            result = _context.sent;
            _context.prev = 3;
            return _context.abrupt('return', !(result instanceof Error));

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](3);
            return _context.abrupt('return', false);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[3, 7]]);
  }));

  this.getLibraryVersion = function () {
    return _this.config.version;
  };

  this.getDefaultProviderUrl = function () {
    return _this.config.defaultProviderUrl;
  };

  this.getDefaultAccount = function () {
    return _this.config.defaultAccount;
  };

  this.getDefaultBlock = function () {
    return _this.config.defaultBlock;
  };

  this.getProvider = function () {
    return _this.currentProvider;
  };

  this.setProvider = function (provider) {
    _this.currentProvider = new _httpProvider2.default(provider);
    _this.messanger.setProvider(_this.currentProvider);
  };

  // validateArgs(args, {}, { nodeUrl: [util.isUrl] })
  var url = args || util.config.defaultNodeUrl;
  //
  this.util = util;
  //
  this.currentProvider = new _httpProvider2.default(url);
  this.messanger = new _messanger2.default(this.currentProvider);
  //
  this.zil = new _zil2.default(this);
}

// library method


// provider method
;

// test function


exports.default = Webz;
module.exports = exports.default;