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

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _request = require('../tools/request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class edition to the original Node function
// 1.change original 'Node' functions to 'Class',which can  be extended in other use cases
// 2.remove the callback function which used in asyncRpcAjax and asyncServerAjax,simply return data and error
// 3.change all the sync functions to async/await ones, which return promises

var validateArgs = _util2.default.validateArgs;

// Node Class By Neeboo

var AsyncNode = function AsyncNode(args) {
  (0, _classCallCheck3.default)(this, AsyncNode);

  _initialiseProps.call(this);

  validateArgs(args, {
    url: [_util2.default.isUrl]
  });
  this.args = args;
  this.url = this.args.url;
}

// helper methods


// // Explorer APIs
;

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.apiUrl = 'https://api.zilliqa.com';
  this.getNetworkId = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _request.asyncRpcAjax)(_this.url, 'GetNetworkId', []);

          case 2:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));
  this.isConnected = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _request.asyncRpcAjax)(_this.url, 'GetNetworkId', []);

          case 2:
            result = _context2.sent;
            return _context2.abrupt('return', !!result);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));
  this.getClientVersion = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _request.asyncRpcAjax)(_this.url, 'GetClientVersion', []);

          case 2:
            result = _context3.sent;
            return _context3.abrupt('return', result);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));
  this.getProtocolVersion = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var result;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _request.asyncRpcAjax)(_this.url, 'GetProtocolVersion', []);

          case 2:
            result = _context4.sent;
            return _context4.abrupt('return', result);

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  this.createTransaction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(args) {
      var result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;

              validateArgs(args, {
                to: [_util2.default.isAddress],
                pubKey: [_util2.default.isPubkey],
                amount: [_util2.default.isNumber],
                gasPrice: [_util2.default.isNumber],
                gasLimit: [_util2.default.isNumber]
              });
              _context5.next = 7;
              break;

            case 4:
              _context5.prev = 4;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', _context5.t0);

            case 7:
              _context5.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'CreateTransaction', args);

            case 9:
              result = _context5.sent;
              return _context5.abrupt('return', result);

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this, [[0, 4]]);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  this.getTransaction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(args) {
      var result;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;

              validateArgs(args, {
                txHash: [_util2.default.isHash]
              });
              _context6.next = 7;
              break;

            case 4:
              _context6.prev = 4;
              _context6.t0 = _context6['catch'](0);
              return _context6.abrupt('return', _context6.t0);

            case 7:
              _context6.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetTransaction', args.txHash);

            case 9:
              result = _context6.sent;
              return _context6.abrupt('return', result);

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this, [[0, 4]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  this.getDsBlock = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(args) {
      var result;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetDsBlock', args.blockNumber);

            case 2:
              result = _context7.sent;
              return _context7.abrupt('return', result);

            case 4:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }();

  this.getTxBlock = function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(args) {
      var result;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetTxBlock', args.blockNumber);

            case 2:
              result = _context8.sent;
              return _context8.abrupt('return', result);

            case 4:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this);
    }));

    return function (_x4) {
      return _ref8.apply(this, arguments);
    };
  }();

  this.getLatestDsBlock = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
    var result;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _request.asyncRpcAjax)(_this.url, 'GetLatestDsBlock', '');

          case 2:
            result = _context9.sent;
            return _context9.abrupt('return', result);

          case 4:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, _this);
  }));
  this.getLatestTxBlock = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
    var result;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            result = (0, _request.asyncRpcAjax)(_this.url, 'GetLatestTxBlock', '');
            return _context10.abrupt('return', result);

          case 2:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, _this);
  }));

  this.getBalance = function () {
    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(args) {
      var result;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;

              validateArgs(args, {
                address: [_util2.default.isAddress]
              });
              _context11.next = 7;
              break;

            case 4:
              _context11.prev = 4;
              _context11.t0 = _context11['catch'](0);
              return _context11.abrupt('return', _context11.t0);

            case 7:
              _context11.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetBalance', args.address);

            case 9:
              result = _context11.sent;
              return _context11.abrupt('return', result);

            case 11:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, _this, [[0, 4]]);
    }));

    return function (_x5) {
      return _ref11.apply(this, arguments);
    };
  }();

  this.getGasPrice = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
    var result;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return (0, _request.asyncRpcAjax)(_this.url, 'GetGasPrice', '');

          case 2:
            result = _context12.sent;
            return _context12.abrupt('return', result);

          case 4:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, _this);
  }));

  this.getSmartContractState = function () {
    var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(args) {
      var result;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;

              validateArgs(args, {
                address: [_util2.default.isAddress]
              });
              _context13.next = 7;
              break;

            case 4:
              _context13.prev = 4;
              _context13.t0 = _context13['catch'](0);
              return _context13.abrupt('return', _context13.t0);

            case 7:
              _context13.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetSmartContractState', args.address);

            case 9:
              result = _context13.sent;
              return _context13.abrupt('return', result);

            case 11:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, _this, [[0, 4]]);
    }));

    return function (_x6) {
      return _ref13.apply(this, arguments);
    };
  }();

  this.getSmartContractCode = function () {
    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(args) {
      var result;
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;

              validateArgs(args, {
                address: [_util2.default.isAddress]
              });
              _context14.next = 7;
              break;

            case 4:
              _context14.prev = 4;
              _context14.t0 = _context14['catch'](0);
              return _context14.abrupt('return', _context14.t0);

            case 7:
              _context14.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetSmartContractCode', args.address);

            case 9:
              result = _context14.sent;
              return _context14.abrupt('return', result);

            case 11:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, _this, [[0, 4]]);
    }));

    return function (_x7) {
      return _ref14.apply(this, arguments);
    };
  }();

  this.getSmartContractInit = function () {
    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(args) {
      var result;
      return _regenerator2.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;

              validateArgs(args, {
                address: [_util2.default.isAddress]
              });
              _context15.next = 7;
              break;

            case 4:
              _context15.prev = 4;
              _context15.t0 = _context15['catch'](0);
              return _context15.abrupt('return', _context15.t0);

            case 7:
              _context15.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetSmartContractInit', args.address);

            case 9:
              result = _context15.sent;
              return _context15.abrupt('return', result);

            case 11:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, _this, [[0, 4]]);
    }));

    return function (_x8) {
      return _ref15.apply(this, arguments);
    };
  }();

  this.getSmartContracts = function () {
    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(args) {
      var result;
      return _regenerator2.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.prev = 0;

              validateArgs(args, {
                address: [_util2.default.isAddress]
              });
              _context16.next = 7;
              break;

            case 4:
              _context16.prev = 4;
              _context16.t0 = _context16['catch'](0);
              return _context16.abrupt('return', _context16.t0);

            case 7:
              _context16.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetSmartContracts', args.address);

            case 9:
              result = _context16.sent;
              return _context16.abrupt('return', result);

            case 11:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, _this, [[0, 4]]);
    }));

    return function (_x9) {
      return _ref16.apply(this, arguments);
    };
  }();

  this.getTransactionHistory = function () {
    var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(args) {
      var result;
      return _regenerator2.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.prev = 0;

              validateArgs(args, {
                address: [_util2.default.isAddress]
              });
              _context17.next = 7;
              break;

            case 4:
              _context17.prev = 4;
              _context17.t0 = _context17['catch'](0);
              return _context17.abrupt('return', _context17.t0);

            case 7:
              _context17.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetTransactionHistory', args.address);

            case 9:
              result = _context17.sent;
              return _context17.abrupt('return', result);

            case 11:
            case 'end':
              return _context17.stop();
          }
        }
      }, _callee17, _this, [[0, 4]]);
    }));

    return function (_x10) {
      return _ref17.apply(this, arguments);
    };
  }();

  this.getBlockTransactionCount = function () {
    var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(args) {
      var result;
      return _regenerator2.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.prev = 0;

              validateArgs(args, {
                blockNumber: [_util2.default.isNumber]
              });
              _context18.next = 7;
              break;

            case 4:
              _context18.prev = 4;
              _context18.t0 = _context18['catch'](0);
              return _context18.abrupt('return', _context18.t0);

            case 7:
              result = (0, _request.asyncRpcAjax)(_this.url, 'GetBlockTransactionCount', args.blockNumber);
              return _context18.abrupt('return', result);

            case 9:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, _this, [[0, 4]]);
    }));

    return function (_x11) {
      return _ref18.apply(this, arguments);
    };
  }();

  this.getCode = function () {
    var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19(args) {
      var result;
      return _regenerator2.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.prev = 0;

              validateArgs(args, {
                address: [_util2.default.isAddress]
              });
              _context19.next = 7;
              break;

            case 4:
              _context19.prev = 4;
              _context19.t0 = _context19['catch'](0);
              return _context19.abrupt('return', _context19.t0);

            case 7:
              _context19.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetCode', args.address);

            case 9:
              result = _context19.sent;
              return _context19.abrupt('return', result);

            case 11:
            case 'end':
              return _context19.stop();
          }
        }
      }, _callee19, _this, [[0, 4]]);
    }));

    return function (_x12) {
      return _ref19.apply(this, arguments);
    };
  }();

  this.createMessage = function () {
    var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20(args) {
      var result;
      return _regenerator2.default.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.prev = 0;

              validateArgs({
                to: [_util2.default.isAddress]
              }, {
                from: [_util2.default.isAddress],
                gas: [_util2.default.isNumber],
                gasPrice: [_util2.default.isNumber]
              });
              _context20.next = 7;
              break;

            case 4:
              _context20.prev = 4;
              _context20.t0 = _context20['catch'](0);
              return _context20.abrupt('return', _context20.t0);

            case 7:
              _context20.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'CreateMessage', args);

            case 9:
              result = _context20.sent;
              return _context20.abrupt('return', result);

            case 11:
            case 'end':
              return _context20.stop();
          }
        }
      }, _callee20, _this, [[0, 4]]);
    }));

    return function (_x13) {
      return _ref20.apply(this, arguments);
    };
  }();

  this.getGasEstimate = function () {
    var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21(args) {
      var result;
      return _regenerator2.default.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.prev = 0;

              validateArgs({}, {
                to: [_util2.default.isAddress],
                from: [_util2.default.isAddress],
                gas: [_util2.default.isNumber],
                gasPrice: [_util2.default.isNumber],
                gasLimit: [_util2.default.isNumber]
              });
              _context21.next = 7;
              break;

            case 4:
              _context21.prev = 4;
              _context21.t0 = _context21['catch'](0);
              return _context21.abrupt('return', _context21.t0);

            case 7:
              _context21.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetGasEstimate', args);

            case 9:
              result = _context21.sent;
              return _context21.abrupt('return', result);

            case 11:
            case 'end':
              return _context21.stop();
          }
        }
      }, _callee21, _this, [[0, 4]]);
    }));

    return function (_x14) {
      return _ref21.apply(this, arguments);
    };
  }();

  this.getTransactionReceipt = function () {
    var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22(args) {
      var result;
      return _regenerator2.default.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              _context22.prev = 0;

              validateArgs(args, {
                txHash: [_util2.default.isHash]
              });
              _context22.next = 7;
              break;

            case 4:
              _context22.prev = 4;
              _context22.t0 = _context22['catch'](0);
              return _context22.abrupt('return', _context22.t0);

            case 7:
              _context22.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetTransactionReceipt', args.txHash);

            case 9:
              result = _context22.sent;
              return _context22.abrupt('return', result);

            case 11:
            case 'end':
              return _context22.stop();
          }
        }
      }, _callee22, _this, [[0, 4]]);
    }));

    return function (_x15) {
      return _ref22.apply(this, arguments);
    };
  }();

  this.getHashrate = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23() {
    var result;
    return _regenerator2.default.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return (0, _request.asyncRpcAjax)(_this.url, 'GetHashrate', '');

          case 2:
            result = _context23.sent;
            return _context23.abrupt('return', result);

          case 4:
          case 'end':
            return _context23.stop();
        }
      }
    }, _callee23, _this);
  }));

  this.isNodeMining = function () {
    var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24(args) {
      var result;
      return _regenerator2.default.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return (0, _request.asyncRpcAjax)(_this.url, 'isNodeMining', '');

            case 2:
              result = _context24.sent;
              return _context24.abrupt('return', result);

            case 4:
            case 'end':
              return _context24.stop();
          }
        }
      }, _callee24, _this);
    }));

    return function (_x16) {
      return _ref24.apply(this, arguments);
    };
  }();

  this.compileCode = function () {
    var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25(args) {
      var result;
      return _regenerator2.default.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              _context25.prev = 0;

              validateArgs({
                code: [_util2.default.isString]
              });
              _context25.next = 7;
              break;

            case 4:
              _context25.prev = 4;
              _context25.t0 = _context25['catch'](0);
              return _context25.abrupt('return', _context25.t0);

            case 7:
              _context25.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'CompileCode', args);

            case 9:
              result = _context25.sent;
              return _context25.abrupt('return', result);

            case 11:
            case 'end':
              return _context25.stop();
          }
        }
      }, _callee25, _this, [[0, 4]]);
    }));

    return function (_x17) {
      return _ref25.apply(this, arguments);
    };
  }();

  this.checkCode = function () {
    var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee26(args) {
      var result;
      return _regenerator2.default.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              _context26.prev = 0;

              validateArgs({
                code: [_util2.default.isString]
              });
              _context26.next = 7;
              break;

            case 4:
              _context26.prev = 4;
              _context26.t0 = _context26['catch'](0);
              return _context26.abrupt('return', _context26.t0);

            case 7:
              _context26.next = 9;
              return (0, _request.asyncServerAjax)(_this.apiUrl + '/v1/checker', args);

            case 9:
              result = _context26.sent;
              return _context26.abrupt('return', result);

            case 11:
            case 'end':
              return _context26.stop();
          }
        }
      }, _callee26, _this, [[0, 4]]);
    }));

    return function (_x18) {
      return _ref26.apply(this, arguments);
    };
  }();

  this.checkCodeTest = function () {
    var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee27(args) {
      var result;
      return _regenerator2.default.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              _context27.prev = 0;

              validateArgs({
                code: [_util2.default.isString]
              });
              _context27.next = 7;
              break;

            case 4:
              _context27.prev = 4;
              _context27.t0 = _context27['catch'](0);
              return _context27.abrupt('return', _context27.t0);

            case 7:
              _context27.next = 9;
              return (0, _request.asyncServerAjax)(_this.apiUrl + '/v1/runner', args);

            case 9:
              result = _context27.sent;
              return _context27.abrupt('return', result);

            case 11:
            case 'end':
              return _context27.stop();
          }
        }
      }, _callee27, _this, [[0, 4]]);
    }));

    return function (_x19) {
      return _ref27.apply(this, arguments);
    };
  }();

  this.getBlockchainInfo = function () {
    var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee28(args) {
      var result;
      return _regenerator2.default.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              _context28.next = 2;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetBlockchainInfo', '');

            case 2:
              result = _context28.sent;
              return _context28.abrupt('return', result);

            case 4:
            case 'end':
              return _context28.stop();
          }
        }
      }, _callee28, _this);
    }));

    return function (_x20) {
      return _ref28.apply(this, arguments);
    };
  }();

  this.getDSBlockListing = function () {
    var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee29(args) {
      var result;
      return _regenerator2.default.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _context29.prev = 0;

              validateArgs(args, {
                page: [_util2.default.isNumber]
              });
              _context29.next = 7;
              break;

            case 4:
              _context29.prev = 4;
              _context29.t0 = _context29['catch'](0);
              return _context29.abrupt('return', _context29.t0);

            case 7:
              _context29.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'DSBlockListing', args.page);

            case 9:
              result = _context29.sent;
              return _context29.abrupt('return', result);

            case 11:
            case 'end':
              return _context29.stop();
          }
        }
      }, _callee29, _this, [[0, 4]]);
    }));

    return function (_x21) {
      return _ref29.apply(this, arguments);
    };
  }();

  this.getTxBlockListing = function () {
    var _ref30 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee30(args) {
      var result;
      return _regenerator2.default.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              _context30.prev = 0;

              validateArgs(args, {
                page: [_util2.default.isNumber]
              });
              _context30.next = 7;
              break;

            case 4:
              _context30.prev = 4;
              _context30.t0 = _context30['catch'](0);
              return _context30.abrupt('return', _context30.t0);

            case 7:
              _context30.next = 9;
              return (0, _request.asyncRpcAjax)(_this.url, 'TxBlockListing', args.page);

            case 9:
              result = _context30.sent;
              return _context30.abrupt('return', result);

            case 11:
            case 'end':
              return _context30.stop();
          }
        }
      }, _callee30, _this, [[0, 4]]);
    }));

    return function (_x22) {
      return _ref30.apply(this, arguments);
    };
  }();

  this.getNumTxnsTxEpoch = function () {
    var _ref31 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee31(args) {
      var result;
      return _regenerator2.default.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              _context31.next = 2;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetNumTxnsTxEpoch', '');

            case 2:
              result = _context31.sent;
              return _context31.abrupt('return', result);

            case 4:
            case 'end':
              return _context31.stop();
          }
        }
      }, _callee31, _this);
    }));

    return function (_x23) {
      return _ref31.apply(this, arguments);
    };
  }();

  this.getNumTxnsDSEpoch = function () {
    var _ref32 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee32(args) {
      var result;
      return _regenerator2.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              _context32.next = 2;
              return (0, _request.asyncRpcAjax)(_this.url, 'GetNumTxnsDSEpoch', '');

            case 2:
              result = _context32.sent;
              return _context32.abrupt('return', result);

            case 4:
            case 'end':
              return _context32.stop();
          }
        }
      }, _callee32, _this);
    }));

    return function (_x24) {
      return _ref32.apply(this, arguments);
    };
  }();

  this.getTransactionListing = function () {
    var _ref33 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee33(args) {
      var result;
      return _regenerator2.default.wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              result = (0, _request.asyncRpcAjax)(_this.url, 'GetRecentTransactions', '');
              return _context33.abrupt('return', result);

            case 2:
            case 'end':
              return _context33.stop();
          }
        }
      }, _callee33, _this);
    }));

    return function (_x25) {
      return _ref33.apply(this, arguments);
    };
  }();
};

exports.default = AsyncNode;