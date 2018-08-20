'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _schnorr = require('./schnorr');

var _schnorr2 = _interopRequireDefault(_schnorr);

var _httpProvider = require('./util/httpProvider');

var _httpProvider2 = _interopRequireDefault(_httpProvider);

var _messanger = require('./util/messanger');

var _messanger2 = _interopRequireDefault(_messanger);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

var _zil = require('./zil');

var _zil2 = _interopRequireDefault(_zil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//  Copyright
//
//
//

var validateArgs = _util2.default.validateArgs;

// test function

var Webz = function Webz(args) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Webz);
  this.providers = {
    HttpProvider: _httpProvider2.default
  };

  this.getLibraryVersion = function () {
    return _this.version;
  };

  this.isConnected = function () {
    return _this.zil && _this.zil.isConnected();
  };

  this.getProvider = function () {
    return _this.currentProvider;
  };

  this.setProvider = function (provider) {
    validateArgs(provider, {}, {
      nodeUrl: [_util2.default.isUrl]
    });
    _this.currentProvider = new _httpProvider2.default(provider);
    _this.messanger.setProvider(_this.currentProvider);
  };

  validateArgs(args, {}, { nodeUrl: [_util2.default.isUrl] });
  this.url = args || _config2.default.defaultNodeUrl;
  //
  this.version = _config2.default.version;

  this.schnorr = new _schnorr2.default();
  this.util = _util2.default;
  //
  this.currentProvider = new _httpProvider2.default(this.url);
  this.messanger = new _messanger2.default(this.currentProvider);

  //
  this.zil = new _zil2.default(this);
  this.data = {};
};

exports.default = Webz;