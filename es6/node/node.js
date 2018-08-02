import util from '../util'
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
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetNetworkId', [], cb)
    }
    return rpcAjax(this.url, 'GetNetworkId', [])
  }

  isConnected = (cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetNetworkId', [], cb)
    }
    return rpcAjax(this.url, 'GetNetworkId', [])
  }

  getClientVersion = (cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetClientVersion', [], cb)
    }
    return rpcAjax(this.url, 'GetClientVersion', [])
  }

  getProtocolVersion = (cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetProtocolVersion', [], cb)
    }
    return rpcAjax(this.url, 'GetProtocolVersion', [])
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
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'CreateTransaction', args, cb)
    }
    return rpcAjax(this.url, 'CreateTransaction', args)
  }

  getTransaction = (args, cb) => {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetTransaction', args.txHash, cb)
    }
    return rpcAjax(this.url, 'GetTransaction', args.txHash)
  }

  getDsBlock = (args, cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetDsBlock', args.blockNumber, cb)
    }
    return rpcAjax(this.url, 'GetDsBlock', args.blockNumber)
  }

  getTxBlock = (args, cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetTxBlock', args.blockNumber, cb)
    }
    return rpcAjax(this.url, 'GetTxBlock', args.blockNumber)
  }

  getLatestDsBlock = (cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetLatestDsBlock', '', cb)
    }
    return rpcAjax(this.url, 'GetLatestDsBlock', '')
  }

  getLatestTxBlock = (cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetLatestTxBlock', '', cb)
    }
    return rpcAjax(this.url, 'GetLatestTxBlock', '')
  }

  getBalance = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetBalance', args.address, cb)
    }
    return rpcAjax(this.url, 'GetBalance', args.address)
  }

  getGasPrice = (cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetGasPrice', '', cb)
    }
    return rpcAjax(this.url, 'GetGasPrice', '')
  }

  getSmartContractState = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetSmartContractState', args.address, cb)
    }
    return rpcAjax(this.url, 'GetSmartContractState', args.address)
  }

  getSmartContractCode = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetSmartContractCode', args.address, cb)
    }
    return rpcAjax(this.url, 'GetSmartContractCode', args.address)
  }

  getSmartContractInit = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetSmartContractInit', args.address, cb)
    }
    return rpcAjax(this.url, 'GetSmartContractInit', args.address)
  }

  getSmartContracts = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetSmartContracts', args.address, cb)
    }
    return rpcAjax(this.url, 'GetSmartContracts', args.address)
  }

  getTransactionHistory = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetTransactionHistory', args.address, cb)
    }
    return rpcAjax(this.url, 'GetTransactionHistory', args.address)
  }

  getBlockTransactionCount = (args, cb) => {
    try {
      validateArgs(args, {
        blockNumber: [util.isNumber]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetBlockTransactionCount', args.blockNumber, cb)
    }
    return rpcAjax(this.url, 'GetBlockTransactionCount', args.blockNumber)
  }

  getCode = (args, cb) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetCode', args.address, cb)
    }
    return rpcAjax(this.url, 'GetCode', args.address)
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
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'CreateMessage', args, cb)
    }
    return rpcAjax(this.url, 'CreateMessage', args)
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
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetGasEstimate', args, cb)
    }
    return rpcAjax(this.url, 'GetGasEstimate', args)
  }

  getTransactionReceipt = (args, cb) => {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetTransactionReceipt', args.txHash, cb)
    }
    return rpcAjax(this.url, 'GetTransactionReceipt', args.txHash)
  }

  getHashrate = (cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetHashrate', '', cb)
    }
    return rpcAjax(this.url, 'GetHashrate', '')
  }

  isNodeMining = (args, cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'isNodeMining', '', cb)
    }
    return rpcAjax(this.url, 'isNodeMining', '')
  }

  compileCode = (args, cb) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'CompileCode', args, cb)
    }
    return rpcAjax(this.url, 'CompileCode', args)
  }

  checkCode = (args, cb) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      serverAjax(`${this.apiUrl}/v1/checker`, args, cb)
    }
    return serverAjax(`${this.apiUrl}/v1/checker`, args)
  }

  checkCodeTest = (args, cb) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      serverAjax(`${this.apiUrl}/v1/runner`, args, cb)
    }
    return serverAjax(`${this.apiUrl}/v1/runner`, args)
  }

  // // Explorer APIs
  getBlockchainInfo = (args, cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetBlockchainInfo', '', cb)
    }
    return rpcAjax(this.url, 'GetBlockchainInfo', '')
  }

  getDSBlockListing = (args, cb) => {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'DSBlockListing', args.page, cb)
    }
    return rpcAjax(this.url, 'DSBlockListing', args.page)
  }

  getTxBlockListing = (args, cb) => {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      })
    } catch (e) {
      if (cb !== undefined && typeof cb === 'function') {
        cb(e)
      }
      return e
    }
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'TxBlockListing', args.page, cb)
    }
    return rpcAjax(this.url, 'TxBlockListing', args.page)
  }

  getNumTxnsTxEpoch = (args, cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetNumTxnsTxEpoch', '', cb)
    }
    return rpcAjax(this.url, 'GetNumTxnsTxEpoch', '')
  }

  getNumTxnsDSEpoch = (args, cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetNumTxnsDSEpoch', '', cb)
    }
    return rpcAjax(this.url, 'GetNumTxnsDSEpoch', '')
  }

  getTransactionListing = (args, cb) => {
    if (cb !== undefined && typeof cb === 'function') {
      rpcAjax(this.url, 'GetRecentTransactions', '', cb)
    }
    return rpcAjax(this.url, 'GetRecentTransactions', '')
  }
}
export default Node
