"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Property = function Property(options) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Property);

  this.setMessanger = function (msg) {
    _this.messanger = msg;
  };

  this.propertyBuilder = function () {
    if (_this.messanger !== null) {
      return function (callback) {
        if (callback) {
          return _this.messanger.sendAsync({ method: _this.getter }, callback);
        }
        return _this.messanger.send({ method: _this.getter });
      };
    }
  };

  var name = options.name,
      getter = options.getter,
      setter = options.setter;

  this.name = name;
  this.getter = getter;
  this.setter = setter;
  this.messanger = null;
};

exports.default = Property;
module.exports = exports.default;