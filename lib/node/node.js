'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _request = require('../tools/request');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateArgs = util.validateArgs;

// Node Class By Neeboo

var Node = function Node(args) {
  (0, _classCallCheck3.default)(this, Node);

  _initialiseProps.call(this);

  validateArgs(args, {
    url: [util.isUrl]
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

  this.getNetworkId = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetNetworkId', [], cb);
  };

  this.isConnected = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetNetworkId', [], cb);
  };

  this.getClientVersion = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetClientVersion', [], cb);
  };

  this.getProtocolVersion = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetProtocolVersion', [], cb);
  };

  this.createTransaction = function (args, cb) {
    try {
      validateArgs(args, {
        to: [util.isAddress],
        pubKey: [util.isPubkey],
        amount: [util.isNumber],
        gasPrice: [util.isNumber],
        gasLimit: [util.isNumber]
      });
    } catch (e) {
      cb(e);
      return;
    }
    (0, _request.rpcAjax)(_this.url, 'CreateTransaction', args, cb);
  };

  this.getTransaction = function (args, cb) {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetTransaction', args.txHash, cb);
  };

  this.getDsBlock = function (args, cb) {
    (0, _request.rpcAjax)(_this.url, 'GetDsBlock', args.blockNumber, cb);
  };

  this.getTxBlock = function (args, cb) {
    (0, _request.rpcAjax)(_this.url, 'GetTxBlock', args.blockNumber, cb);
  };

  this.getLatestDsBlock = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetLatestDsBlock', '', cb);
  };

  this.getLatestTxBlock = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetLatestTxBlock', '', cb);
  };

  this.getBalance = function (args, cb) {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetBalance', args.address, cb);
  };

  this.getGasPrice = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetGasPrice', '', cb);
  };

  this.getSmartContractState = function (args, cb) {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetSmartContractState', args.address, cb);
  };

  this.getSmartContractCode = function (args, cb) {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetSmartContractCode', args.address, cb);
  };

  this.getSmartContractInit = function (args, cb) {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetSmartContractInit', args.address, cb);
  };

  this.getSmartContracts = function (args, cb) {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetSmartContracts', args.address, cb);
  };

  this.getTransactionHistory = function (args, cb) {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetTransactionHistory', args.address, cb);
  };

  this.getBlockTransactionCount = function (args, cb) {
    try {
      validateArgs(args, {
        blockNumber: [util.isNumber]
      });
    } catch (e) {
      cb(e);
      return;
    }
    (0, _request.rpcAjax)(_this.url, 'GetBlockTransactionCount', args.blockNumber, cb);
  };

  this.getCode = function (args, cb) {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetCode', args.address, cb);
  };

  this.createMessage = function (args, cb) {
    try {
      validateArgs({
        to: [util.isAddress]
      }, {
        from: [util.isAddress],
        gas: [util.isNumber],
        gasPrice: [util.isNumber]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'CreateMessage', args, cb);
  };

  this.getGasEstimate = function (args, cb) {
    try {
      validateArgs({}, {
        to: [util.isAddress],
        from: [util.isAddress],
        gas: [util.isNumber],
        gasPrice: [util.isNumber],
        gasLimit: [util.isNumber]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetGasEstimate', args, cb);
  };

  this.getTransactionReceipt = function (args, cb) {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'GetTransactionReceipt', args.txHash, cb);
  };

  this.getHashrate = function (cb) {
    (0, _request.rpcAjax)(_this.url, 'GetHashrate', '', cb);
  };

  this.isNodeMining = function (args, cb) {
    (0, _request.rpcAjax)(_this.url, 'isNodeMining', '', cb);
  };

  this.compileCode = function (args, cb) {
    try {
      validateArgs({
        code: [util.isString]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'CompileCode', args, cb);
  };

  this.checkCode = function (args, cb) {
    try {
      validateArgs({
        code: [util.isString]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.serverAjax)(_this.apiUrl + '/v1/checker', args, cb);
  };

  this.checkCodeTest = function (args, cb) {
    try {
      validateArgs({
        code: [util.isString]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.serverAjax)(_this.apiUrl + '/v1/runner', args, cb);
  };

  this.getBlockchainInfo = function (args, cb) {
    (0, _request.rpcAjax)(_this.url, 'GetBlockchainInfo', '', cb);
  };

  this.getDSBlockListing = function (args, cb) {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'DSBlockListing', args.page, cb);
  };

  this.getTxBlockListing = function (args, cb) {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      });
    } catch (e) {
      cb(e);
      return;
    }

    (0, _request.rpcAjax)(_this.url, 'TxBlockListing', args.page, cb);
  };

  this.getNumTxnsTxEpoch = function (args, cb) {
    (0, _request.rpcAjax)(_this.url, 'GetNumTxnsTxEpoch', '', cb);
  };

  this.getNumTxnsDSEpoch = function (args, cb) {
    (0, _request.rpcAjax)(_this.url, 'GetNumTxnsDSEpoch', '', cb);
  };

  this.getTransactionListing = function (args, cb) {
    (0, _request.rpcAjax)(_this.url, 'GetRecentTransactions', '', cb);
  };
};

exports.default = Node;