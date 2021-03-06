'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _method = require('../util/method');

var _method2 = _interopRequireDefault(_method);

var _property = require('../util/property');

var _property2 = _interopRequireDefault(_property);

var _util = require('../util');

var _config = require('../util/config');

var _config2 = _interopRequireDefault(_config);

var _methodObjects = require('./methodObjects');

var _methodObjects2 = _interopRequireDefault(_methodObjects);

var _propertyObjects = require('./propertyObjects');

var _propertyObjects2 = _interopRequireDefault(_propertyObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapObjectToMethods = function mapObjectToMethods(main) {
  _methodObjects2.default.map(function (data) {
    var zilMethod = new _method2.default(data);
    zilMethod.setMessanger(main.messanger);
    zilMethod.assignToObject(main);
    return false;
  });
};

var mapPropertyToObjects = function mapPropertyToObjects(main) {
  _propertyObjects2.default.map(function (data) {
    var zilProperty = new _property2.default(data);
    zilProperty.setMessanger(main.messanger);
    zilProperty.assignToObject(main);
    return false;
  });
};

var Zil = function () {
  function Zil(Webz) {
    (0, _classCallCheck3.default)(this, Zil);

    this.generateWallet = function (walletName) {
      if (!(0, _util.isString)(walletName)) throw Error('walletName has to be String');
      var walletPrivateKey = (0, _util.generatePrivateKey)();
      var walletPublicKey = walletPrivateKey ? (0, _util.getPubKeyFromPrivateKey)(walletPrivateKey) : null;
      var walletAddress = walletPrivateKey ? (0, _util.getAddressFromPrivateKey)(walletPrivateKey) : null;
      var Wallet = {
        walletName: walletName,
        walletPublicKey: walletPublicKey,
        walletPrivateKey: walletPrivateKey,
        walletAddress: walletAddress
      };
      return Wallet;
    };

    this.messanger = Webz.messanger;
    this.config = _config2.default;
    mapObjectToMethods(this);
    mapPropertyToObjects(this);
  }

  /**
   * generate Key pairs and use WalletName as input param to identify
   * @param  {[type]} walletName [description]
   * @return {[type]}            [description]
   */


  (0, _createClass3.default)(Zil, [{
    key: 'defaultBlock',
    get: function get() {
      return this.config.defaultBlock;
    },
    set: function set(block) {
      this.config.defaultBlock = block;
      return block;
    }
  }, {
    key: 'defaultAccount',
    get: function get() {
      return this.config.defaultAccount;
    },
    set: function set(account) {
      this.config.defaultAccount = account;
      return account;
    }
  }]);
  return Zil;
}();

exports.default = Zil;
module.exports = exports.default;