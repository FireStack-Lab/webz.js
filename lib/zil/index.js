'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _method = require('../util/method');

var _method2 = _interopRequireDefault(_method);

var _Objects = require('./Objects');

var _Objects2 = _interopRequireDefault(_Objects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Zil = function Zil(Webz) {
  (0, _classCallCheck3.default)(this, Zil);

  _initialiseProps.call(this);

  this.messanger = Webz.messanger;
  var self = this;
  this.mapObjectToMethods(self);
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.mapObjectToMethods = function (self) {
    _Objects2.default.map(function (data) {
      var zilMethod = new _method2.default(data);
      zilMethod.setMessanger(_this.messanger);
      var zilKey = data.name;
      var zilObject = {};
      zilObject[zilKey] = zilMethod;
      console.log(self);
      return zilObject;
      // return Object.assign(self, zilObject)
    });
  };
};

exports.default = Zil;