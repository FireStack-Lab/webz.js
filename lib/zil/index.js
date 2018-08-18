'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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
  var MethodList = this.mapObjectToMethods();
  for (var i = 0; i < MethodList; i += 1) {
    var methodObj = MethodList[i];
    (0, _assign2.default)({}, this, methodObj);
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.mapObjectToMethods = function () {
    var MethodList = _Objects2.default.map(function (data) {
      var zilMethod = new _method2.default(data);
      zilMethod.setMessanger(_this.messanger);
      var zilKey = data.name;
      var zilObject = {};
      zilObject[zilKey] = zilMethod;
      return zilObject;
    });
    // console.log({ MethodList })
    return MethodList;
  };
};

exports.default = Zil;