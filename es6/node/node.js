import * as util from '../util'
import { rpcAjax, serverAjax } from '../tools/request'

const { validateArgs } = util

// Node Class By Neeboo
class Node {
  constructor(args) {
    validateArgs(args, {
      url: [util.isUrl]
    })
    this.args = args
    this.url = this.args.url
  }

  apiUrl = 'https://api.zilliqa.com'

  // helper methods
  getNetworkId = (cb) => {
    rpcAjax(this.url, 'GetNetworkId', [], cb)
  }

  isConnected = (cb) => {
    rpcAjax(this.url, 'GetNetworkId', [], cb)
  }

  getClientVersion = (cb) => {
    rpcAjax(this.url, 'GetClientVersion', [], cb)
  }

  getProtocolVersion = (cb) => {
    rpcAjax(this.url, 'GetProtocolVersion', [], cb)
  }

  createTransaction = (args, cb) => {
    try {
      validateArgs(args, {
        to: [util.isAddress],
        pubKey: [util.isPubkey],
        amount: [util.isNumber],
        gasPrice: [util.isNumber],
        gasLimit: [util.isNumber]
      })
    } catch (e) {
      cb(e)
      return
    }
    rpcAjax(this.url, 'CreateTransaction', args, cb)
  }

  getTransaction = (args, cb) => {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetTransaction', args.txHash, cb)
  }

  getDsBlock = (args, cb) => {
    rpcAjax(this.url, 'GetDsBlock', args.blockNumber, cb)
  }

  getTxBlock = (args, cb) => {
    rpcAjax(this.url, 'GetTxBlock', args.blockNumber, cb)
  }

  getLatestDsBlock = (cb) => {
    rpcAjax(this.url, 'GetLatestDsBlock', '', cb)
  }

  getLatestTxBlock = (cb) => {
    rpcAjax(this.url, 'GetLatestTxBlock', '', cb)
  }

  getBalance = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetBalance', args.address, cb)
  }

  getGasPrice = (cb) => {
    rpcAjax(this.url, 'GetGasPrice', '', cb)
  }

  getSmartContractState = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetSmartContractState', args.address, cb)
  }

  getSmartContractCode = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetSmartContractCode', args.address, cb)
  }

  getSmartContractInit = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetSmartContractInit', args.address, cb)
  }

  getSmartContracts = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetSmartContracts', args.address, cb)
  }

  getTransactionHistory = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetTransactionHistory', args.address, cb)
  }

  getBlockTransactionCount = (args, cb) => {
    try {
      validateArgs(args, {
        blockNumber: [util.isNumber]
      })
    } catch (e) {
      cb(e)
      return
    }
    rpcAjax(this.url, 'GetBlockTransactionCount', args.blockNumber, cb)
  }

  getCode = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetCode', args.address, cb)
  }

  createMessage = (args, cb) => {
    try {
      validateArgs(
        {
          to: [util.isAddress]
        },
        {
          from: [util.isAddress],
          gas: [util.isNumber],
          gasPrice: [util.isNumber]
        }
      )
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'CreateMessage', args, cb)
  }

  getGasEstimate = (args, cb) => {
    try {
      validateArgs(
        {},
        {
          to: [util.isAddress],
          from: [util.isAddress],
          gas: [util.isNumber],
          gasPrice: [util.isNumber],
          gasLimit: [util.isNumber]
        }
      )
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetGasEstimate', args, cb)
  }

  getTransactionReceipt = (args, cb) => {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'GetTransactionReceipt', args.txHash, cb)
  }

  getHashrate = (cb) => {
    rpcAjax(this.url, 'GetHashrate', '', cb)
  }

  isNodeMining = (args, cb) => {
    rpcAjax(this.url, 'isNodeMining', '', cb)
  }

  compileCode = (args, cb) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'CompileCode', args, cb)
  }

  checkCode = (args, cb) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      cb(e)
      return
    }

    serverAjax(`${this.apiUrl}/v1/checker`, args, cb)
  }

  checkCodeTest = (args, cb) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      cb(e)
      return
    }

    serverAjax(`${this.apiUrl}/v1/runner`, args, cb)
  }

  // // Explorer APIs
  getBlockchainInfo = (args, cb) => {
    rpcAjax(this.url, 'GetBlockchainInfo', '', cb)
  }

  getDSBlockListing = (args, cb) => {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'DSBlockListing', args.page, cb)
  }

  getTxBlockListing = (args, cb) => {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      })
    } catch (e) {
      cb(e)
      return
    }

    rpcAjax(this.url, 'TxBlockListing', args.page, cb)
  }

  getNumTxnsTxEpoch = (args, cb) => {
    rpcAjax(this.url, 'GetNumTxnsTxEpoch', '', cb)
  }

  getNumTxnsDSEpoch = (args, cb) => {
    rpcAjax(this.url, 'GetNumTxnsDSEpoch', '', cb)
  }

  getTransactionListing = (args, cb) => {
    rpcAjax(this.url, 'GetRecentTransactions', '', cb)
  }
}
export default Node
