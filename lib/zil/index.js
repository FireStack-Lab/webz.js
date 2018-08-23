'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _method = require('../util/method');

var _method2 = _interopRequireDefault(_method);

var _util = require('../util');

var _Objects = require('./Objects');

var _Objects2 = _interopRequireDefault(_Objects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapObjectToMethods = function mapObjectToMethods(main) {
  _Objects2.default.map(function (data) {
    var zilMethod = new _method2.default(data);
    var zilKey = data.name;
    var zilObject = {};
    zilMethod.setMessanger(main.messanger);
    zilObject[zilKey] = zilMethod.methodBuilder();
    return (0, _assign2.default)(main, zilObject);
  });
};

var Zil = function Zil(Webz) {
  (0, _classCallCheck3.default)(this, Zil);

  this.generateWallet = function (walletName) {
    if (!(0, _util.isString)(walletName)) throw Error('walletName has to be String');
    var walletPrivateKey = (0, _util.generatePrivateKey)();
    var walletPublicKey = (0, _util.getPubKeyFromPrivateKey)(walletPrivateKey);
    var walletAddress = (0, _util.getAddressFromPrivateKey)(walletPrivateKey);
    var Wallet = {
      walletName: walletName,
      walletPublicKey: walletPublicKey,
      walletPrivateKey: walletPrivateKey,
      walletAddress: walletAddress
    };
    return Wallet;
  };

  this.messanger = Webz.messanger;
  mapObjectToMethods(this);
};

exports.default = Zil;
module.exports = exports.default;