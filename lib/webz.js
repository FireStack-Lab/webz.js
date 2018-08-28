'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var validateArgs = util.validateArgs,
    config = util.config;

// test function

var Webz = function Webz(args) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Webz);
  this.providers = {
    HttpProvider: _httpProvider2.default

    // library method
  };

  this.isConnected = function () {
    return _this.zil && _this.zil.isConnected();
  };

  this.getLibraryVersion = function () {
    return _this.version;
  };

  this.getProvider = function () {
    return _this.currentProvider;
  };

  this.setProvider = function (provider) {
    validateArgs(provider, {}, {
      nodeUrl: [util.isUrl]
    });
    _this.currentProvider = new _httpProvider2.default(provider);
    _this.messanger.setProvider(_this.currentProvider);
  };

  this.getBalance = function (address) {
    return _this.zil.getBalance(address);
  };

  this.generateWallet = function (walletName) {
    return _this.zil.generateWallet(walletName);
  };

  this.getNetworkType = function () {};

  validateArgs(args, {}, { nodeUrl: [util.isUrl] });
  this.url = args || config.defaultNodeUrl;
  //
  this.version = config.version;

  this.util = util;
  //
  this.currentProvider = new _httpProvider2.default(this.url);
  this.messanger = new _messanger2.default(this.currentProvider);

  //
  this.zil = new _zil2.default(this);
  this.data = {};
}

// provider method


// zil related method
;

exports.default = Webz;
module.exports = exports.default;