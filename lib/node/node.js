'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _request = require('../tools/request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateArgs = _util2.default.validateArgs;

// Node Class By Neeboo

var Node = function Node(args) {
  (0, _classCallCheck3.default)(this, Node);

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
        to: [_util2.default.isAddress],
        pubKey: [_util2.default.isPubkey],
        amount: [_util2.default.isNumber],
        gasPrice: [_util2.default.isNumber],
        gasLimit: [_util2.default.isNumber]
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
        txHash: [_util2.default.isHash]
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
        address: [_util2.default.isAddress]
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
        address: [_util2.default.isAddress]
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
        address: [_util2.default.isAddress]
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
        address: [_util2.default.isAddress]
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
        address: [_util2.default.isAddress]
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
        address: [_util2.default.isAddress]
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
        blockNumber: [_util2.default.isNumber]
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
        address: [_util2.default.isAddress]
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
        to: [_util2.default.isAddress]
      }, {
        from: [_util2.default.isAddress],
        gas: [_util2.default.isNumber],
        gasPrice: [_util2.default.isNumber]
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
        to: [_util2.default.isAddress],
        from: [_util2.default.isAddress],
        gas: [_util2.default.isNumber],
        gasPrice: [_util2.default.isNumber],
        gasLimit: [_util2.default.isNumber]
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
        txHash: [_util2.default.isHash]
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
        code: [_util2.default.isString]
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
        code: [_util2.default.isString]
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
        code: [_util2.default.isString]
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
        page: [_util2.default.isNumber]
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
        page: [_util2.default.isNumber]
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