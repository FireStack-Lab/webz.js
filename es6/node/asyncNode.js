// Class edition to the original Node function
// 1.change original 'Node' functions to 'Class',which can  be extended in other use cases
// 2.remove the callback function which used in asyncRpcAjax and asyncServerAjax,simply return data and error
// 3.change all the sync functions to async/await ones, which return promises

import util from '../util'
import { asyncRpcAjax, asyncServerAjax } from '../tools/request'

const { validateArgs } = util

// Node Class By Neeboo
class AsyncNode {
  constructor(args) {
    validateArgs(args, {
      url: [util.isUrl]
    })
    this.args = args
    this.url = this.args.url
  }

  apiUrl = 'https://api.zilliqa.com'

  // helper methods
  getNetworkId = async () => {
    const result = await asyncRpcAjax(this.url, 'GetNetworkId', [])
    return result
  }

  isConnected = async () => {
    const result = await asyncRpcAjax(this.url, 'GetNetworkId', [])
    return !!result
  }

  getClientVersion = async () => {
    const result = await asyncRpcAjax(this.url, 'GetClientVersion', [])
    return result
  }

  getProtocolVersion = async () => {
    const result = await asyncRpcAjax(this.url, 'GetProtocolVersion', [])
    return result
  }

  createTransaction = async (args) => {
    try {
      validateArgs(args, {
        to: [util.isAddress],
        pubKey: [util.isPubkey],
        amount: [util.isNumber],
        gasPrice: [util.isNumber],
        gasLimit: [util.isNumber]
      })
    } catch (e) {
      return e
    }
    const result = await asyncRpcAjax(this.url, 'CreateTransaction', args)
    return result
  }

  getTransaction = async (args) => {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetTransaction', args.txHash)
    return result
  }

  getDsBlock = async (args) => {
    const result = await asyncRpcAjax(this.url, 'GetDsBlock', args.blockNumber)
    return result
  }

  getTxBlock = async (args) => {
    const result = await asyncRpcAjax(this.url, 'GetTxBlock', args.blockNumber)
    return result
  }

  getLatestDsBlock = async () => {
    const result = await asyncRpcAjax(this.url, 'GetLatestDsBlock', '')
    return result
  }

  getLatestTxBlock = async () => {
    const result = asyncRpcAjax(this.url, 'GetLatestTxBlock', '')
    return result
  }

  getBalance = async (args) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetBalance', args.address)
    return result
  }

  getGasPrice = async () => {
    const result = await asyncRpcAjax(this.url, 'GetGasPrice', '')
    return result
  }

  getSmartContractState = async (args) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetSmartContractState', args.address)
    return result
  }

  getSmartContractCode = async (args) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetSmartContractCode', args.address)
    return result
  }

  getSmartContractInit = async (args) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetSmartContractInit', args.address)
    return result
  }

  getSmartContracts = async (args) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetSmartContracts', args.address)
    return result
  }

  getTransactionHistory = async (args) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetTransactionHistory', args.address)
    return result
  }

  getBlockTransactionCount = async (args) => {
    try {
      validateArgs(args, {
        blockNumber: [util.isNumber]
      })
    } catch (e) {
      return e
    }
    const result = asyncRpcAjax(this.url, 'GetBlockTransactionCount', args.blockNumber)
    return result
  }

  getCode = async (args) => {
    try {
      validateArgs(args, {
        address: [util.isAddress]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetCode', args.address)
    return result
  }

  createMessage = async (args) => {
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
      return e
    }

    const result = await asyncRpcAjax(this.url, 'CreateMessage', args)
    return result
  }

  getGasEstimate = async (args) => {
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
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetGasEstimate', args)
    return result
  }

  getTransactionReceipt = async (args) => {
    try {
      validateArgs(args, {
        txHash: [util.isHash]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'GetTransactionReceipt', args.txHash)
    return result
  }

  getHashrate = async () => {
    const result = await asyncRpcAjax(this.url, 'GetHashrate', '')
    return result
  }

  isNodeMining = async (args) => {
    const result = await asyncRpcAjax(this.url, 'isNodeMining', '')
    return result
  }

  compileCode = async (args) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'CompileCode', args)
    return result
  }

  checkCode = async (args) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      return e
    }

    const result = await asyncServerAjax(`${this.apiUrl}/v1/checker`, args)
    return result
  }

  checkCodeTest = async (args) => {
    try {
      validateArgs({
        code: [util.isString]
      })
    } catch (e) {
      return e
    }

    const result = await asyncServerAjax(`${this.apiUrl}/v1/runner`, args)
    return result
  }

  // // Explorer APIs
  getBlockchainInfo = async (args) => {
    const result = await asyncRpcAjax(this.url, 'GetBlockchainInfo', '')
    return result
  }

  getDSBlockListing = async (args) => {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'DSBlockListing', args.page)
    return result
  }

  getTxBlockListing = async (args) => {
    try {
      validateArgs(args, {
        page: [util.isNumber]
      })
    } catch (e) {
      return e
    }

    const result = await asyncRpcAjax(this.url, 'TxBlockListing', args.page)
    return result
  }

  getNumTxnsTxEpoch = async (args) => {
    const result = await asyncRpcAjax(this.url, 'GetNumTxnsTxEpoch', '')
    return result
  }

  getNumTxnsDSEpoch = async (args) => {
    const result = await asyncRpcAjax(this.url, 'GetNumTxnsDSEpoch', '')
    return result
  }

  getTransactionListing = async (args) => {
    const result = asyncRpcAjax(this.url, 'GetRecentTransactions', '')
    return result
  }
}
export default AsyncNode
