'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _node = require('./node');

var _schnorr = require('./schnorr');

var _schnorr2 = _interopRequireDefault(_schnorr);

var _httpProvider = require('./util/httpProvider');

var _httpProvider2 = _interopRequireDefault(_httpProvider);

var _messanger = require('./util/messanger');

var _messanger2 = _interopRequireDefault(_messanger);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//  Copyright
//
//
//

var Node = _node.syncNode;
var validateArgs = _util2.default.validateArgs;

var Webz =
// setProvider=(provider)=>{
//   validateArgs(provider, {
//     nodeUrl: [util.isUrl]
//   })
//   this.provider=new HttpProvider(this.url)
// }
function Webz(args) {
  (0, _classCallCheck3.default)(this, Webz);

  _initialiseProps.call(this);

  validateArgs(args, {}, { nodeUrl: [_util2.default.isUrl] });
  this.url = args || _config2.default.defaultNodeUrl;

  //
  this.version = _config2.default.version;
  this.node = new Node({ url: this.url });
  this.schnorr = new _schnorr2.default();
  this.util = _util2.default;
  //
  this.messanger = new _messanger2.default(this.url);
  this.currentProvider = args.nodeUrl;

  //
  this.data = {};
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.providers = {
    HttpProvider: _httpProvider2.default
  };

  this.getLibraryVersion = function () {
    return _this.version;
  };

  this.isConnected = function () {
    return _this.node && _this.node.isConnected();
  };

  this.getNode = function () {
    return _this.node;
  };

  this.setNode = function (args) {
    validateArgs(args, {
      nodeUrl: [_util2.default.isUrl]
    });
    _this.node = new Node({ url: args });
    return null;
  };

  this.getProvider = function () {
    return _this.currentProvider;
  };

  this.setProvider = function (provider) {
    validateArgs(provider, {
      nodeUrl: [_util2.default.isUrl]
    });
    _this.messanger.setProvider(provider);
    _this.currentProvider = provider;
  };
};

exports.default = Webz;