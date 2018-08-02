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
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetNetworkId', [], cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetNetworkId', []);
  };

  this.isConnected = function (cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetNetworkId', [], cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetNetworkId', []);
  };

  this.getClientVersion = function (cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetClientVersion', [], cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetClientVersion', []);
  };

  this.getProtocolVersion = function (cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetProtocolVersion', [], cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetProtocolVersion', []);
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
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'CreateTransaction', args, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'CreateTransaction', args);
  };

  this.getTransaction = function (args, cb) {
    try {
      validateArgs(args, {
        txHash: [_util2.default.isHash]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetTransaction', args.txHash, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetTransaction', args.txHash);
  };

  this.getDsBlock = function (args, cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetDsBlock', args.blockNumber, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetDsBlock', args.blockNumber);
  };

  this.getTxBlock = function (args, cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetTxBlock', args.blockNumber, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetTxBlock', args.blockNumber);
  };

  this.getLatestDsBlock = function (cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetLatestDsBlock', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetLatestDsBlock', '');
  };

  this.getLatestTxBlock = function (cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetLatestTxBlock', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetLatestTxBlock', '');
  };

  this.getBalance = function (args, cb) {
    try {
      validateArgs(args, {
        address: [_util2.default.isAddress]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetBalance', args.address, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetBalance', args.address);
  };

  this.getGasPrice = function (cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetGasPrice', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetGasPrice', '');
  };

  this.getSmartContractState = function (args, cb) {
    try {
      validateArgs(args, {
        address: [_util2.default.isAddress]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetSmartContractState', args.address, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetSmartContractState', args.address);
  };

  this.getSmartContractCode = function (args, cb) {
    try {
      validateArgs(args, {
        address: [_util2.default.isAddress]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetSmartContractCode', args.address, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetSmartContractCode', args.address);
  };

  this.getSmartContractInit = function (args, cb) {
    try {
      validateArgs(args, {
        address: [_util2.default.isAddress]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetSmartContractInit', args.address, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetSmartContractInit', args.address);
  };

  this.getSmartContracts = function (args, cb) {
    try {
      validateArgs(args, {
        address: [_util2.default.isAddress]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetSmartContracts', args.address, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetSmartContracts', args.address);
  };

  this.getTransactionHistory = function (args, cb) {
    try {
      validateArgs(args, {
        address: [_util2.default.isAddress]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetTransactionHistory', args.address, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetTransactionHistory', args.address);
  };

  this.getBlockTransactionCount = function (args, cb) {
    try {
      validateArgs(args, {
        blockNumber: [_util2.default.isNumber]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetBlockTransactionCount', args.blockNumber, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetBlockTransactionCount', args.blockNumber);
  };

  this.getCode = function (args, cb) {
    try {
      validateArgs(args, {
        address: [_util2.default.isAddress]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetCode', args.address, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetCode', args.address);
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
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'CreateMessage', args, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'CreateMessage', args);
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
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetGasEstimate', args, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetGasEstimate', args);
  };

  this.getTransactionReceipt = function (args, cb) {
    try {
      validateArgs(args, {
        txHash: [_util2.default.isHash]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetTransactionReceipt', args.txHash, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetTransactionReceipt', args.txHash);
  };

  this.getHashrate = function (cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetHashrate', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetHashrate', '');
  };

  this.isNodeMining = function (args, cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'isNodeMining', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'isNodeMining', '');
  };

  this.compileCode = function (args, cb) {
    try {
      validateArgs({
        code: [_util2.default.isString]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'CompileCode', args, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'CompileCode', args);
  };

  this.checkCode = function (args, cb) {
    try {
      validateArgs({
        code: [_util2.default.isString]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.serverAjax)(_this.apiUrl + '/v1/checker', args, cb);
    }
    return (0, _request.serverAjax)(_this.apiUrl + '/v1/checker', args);
  };

  this.checkCodeTest = function (args, cb) {
    try {
      validateArgs({
        code: [_util2.default.isString]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.serverAjax)(_this.apiUrl + '/v1/runner', args, cb);
    }
    return (0, _request.serverAjax)(_this.apiUrl + '/v1/runner', args);
  };

  this.getBlockchainInfo = function (args, cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetBlockchainInfo', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetBlockchainInfo', '');
  };

  this.getDSBlockListing = function (args, cb) {
    try {
      validateArgs(args, {
        page: [_util2.default.isNumber]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'DSBlockListing', args.page, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'DSBlockListing', args.page);
  };

  this.getTxBlockListing = function (args, cb) {
    try {
      validateArgs(args, {
        page: [_util2.default.isNumber]
      });
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e);
      }
      return e;
    }
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'TxBlockListing', args.page, cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'TxBlockListing', args.page);
  };

  this.getNumTxnsTxEpoch = function (args, cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetNumTxnsTxEpoch', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetNumTxnsTxEpoch', '');
  };

  this.getNumTxnsDSEpoch = function (args, cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetNumTxnsDSEpoch', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetNumTxnsDSEpoch', '');
  };

  this.getTransactionListing = function (args, cb) {
    if (cb !== undefined && typeof cb === 'function') {
      (0, _request.rpcAjax)(_this.url, 'GetRecentTransactions', '', cb);
    }
    return (0, _request.rpcAjax)(_this.url, 'GetRecentTransactions', '');
  };
};

exports.default = Node;