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

var Webz = function Webz(args) {
  (0, _classCallCheck3.default)(this, Webz);

  _initialiseProps.call(this);

  validateArgs(args, {}, { nodeUrl: [_util2.default.isUrl] });
  this.version = _config2.default.version;
  this.node = new Node({ url: args.nodeUrl || _config2.default.defaultNodeUrl });
  this.schnorr = new _schnorr2.default();
  this.util = _util2.default;
  this.data = {};
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

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
    _this.node = new Node({ url: args.nodeUrl || _config2.default.defaultNodeUrl });
    return null;
  };
};

exports.default = Webz;