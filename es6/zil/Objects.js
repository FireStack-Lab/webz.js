export default [
  /**
   * getNetworkId
   * @params {}
   */
  {
    name: 'getNetworkId',
    call: 'GetNetworkId',
    params: {}
  },
  /**
   * isConnected
   * @params {}
   */
  {
    name: 'isConnected',
    call: 'GetNetworkId',
    params: {}
  },

  /**
   * getClientVersion
   * @params {}
   */
  {
    name: 'getClientVersion',
    call: 'GetClientVersion',
    params: {}
  },
  /**
   * getProtocolVersion
   * @params {}
   */
  {
    name: 'getProtocolVersion',
    call: 'GetProtocolVersion',
    params: {}
  },
  /**
   * getTransaction
   * @params {txHash:Hash}
   */
  {
    name: 'getTransaction',
    call: 'GetTransaction',
    params: {
      txHash: ['isHash', 'required']
    }
  },
  /**
   * createTransaction
   * @params {txHash:Hash}
   */
  {
    name: 'createTransaction',
    call: 'CreateTransaction',
    params: {
      to: ['isAddress', 'required'],
      pubKey: ['isPubkey', 'required'],
      amount: ['isBN', 'required'],
      gasPrice: ['isNumber', 'required'],
      gasLimit: ['isNumber', 'required']
    }
  },
  /**
   * getDsBlock
   * @params {blockNumber:Number}
   */
  {
    name: 'getDsBlock',
    call: 'GetDsBlock',
    params: {
      blockNumber: ['isString', 'required']
    }
  },
  /**
   * getTxBlock
   * @params {blockNumber:Number}
   */
  {
    name: 'getTxBlock',
    call: 'GetTxBlock',
    params: {
      blockNumber: ['isString', 'required']
    }
  },
  /**
   * getLatestDsBlock
   * @params {}
   */
  {
    name: 'getLatestDsBlock',
    call: 'GetLatestDsBlock',
    params: {}
  },
  /**
   * getLatestTxBlock
   * @params {}
   */
  {
    name: 'getLatestTxBlock',
    call: 'GetLatestTxBlock',
    params: {}
  },
  /**
   * getBalance
   * @params {address:Address}
   */
  {
    name: 'getBalance',
    call: 'GetBalance',
    params: {
      address: ['isAddress', 'required']
    }
  },
  /**
   * getGasPrice
   * @params {}
   */
  {
    name: 'getGasPrice',
    call: 'GetGasPrice',
    params: {}
  },
  /**
   * getSmartContractState
   * @params {address:Address}
   */
  {
    name: 'getSmartContractState',
    call: 'GetSmartContractState',
    params: { address: ['isAddress', 'required'] }
  },
  /**
   * getSmartContractCode
   * @params {address:Address}
   */
  {
    name: 'getSmartContractCode',
    call: 'GetSmartContractCode',
    params: { address: ['isAddress', 'required'] }
  },
  /**
   * getSmartContractInit
   * @params:{address:Address}
   */
  {
    name: 'getSmartContractInit',
    call: 'GetSmartContractInit',
    params: { address: ['isAddress', 'required'] }
  },
  /**
   * getSmartContracts
   * @params {address:Address}
   */
  {
    name: 'getSmartContracts',
    call: 'GetSmartContracts',
    params: { address: ['isAddress', 'required'] }
  },
  /**
   * getTransactionHistory
   * @params {address:Address}
   */
  {
    name: 'getTransactionHistory',
    call: 'GetTransactionHistory',
    params: { address: ['isAddress', 'required'] }
  },
  /**
   * getBlockTransactionCount
   * @params {blockNumber:Number}
   */
  {
    name: 'getBlockTransactionCount',
    call: 'GetBlockTransactionCount',
    params: { blockNumber: ['isNumber', 'required'] }
  },
  /**
   * getCode
   * @params {address:Address}
   */
  {
    name: 'getCode',
    call: 'GetCode',
    params: { address: ['isAddress', 'required'] }
  },
  /**
   * createMessage
   * @params {to:Address,from:Address,gas:Number,gasPrice:Number}
   */
  {
    name: 'createMessage',
    call: 'CreateMessage',
    params: {
      to: ['isAddress', 'required'],
      from: ['isAddress', 'optional'],
      gas: ['isNumber', 'optional'],
      gasPrice: ['isNumber', 'optional']
    }
  },
  /**
   * getGasEstimate
   * @params {
     to: Address,
     from: Address,
     gas: Number,
     gasPrice: Number,
     gasLimit: Number
   }
   */
  {
    name: 'getGasEstimate',
    call: 'GetGasEstimate',
    params: {
      to: ['isAddress', 'optional'],
      from: ['isAddress', 'optional'],
      gas: ['isNumber', 'optional'],
      gasPrice: ['isNumber', 'optional'],
      gasLimit: ['isNumber', 'optional']
    }
  },
  /**
   * getTransactionReceipt
   * @params {txHash:Hash}
   */
  {
    name: 'getTransactionReceipt',
    call: 'GetTransactionReceipt',
    params: {
      txHash: ['isHash', 'optional']
    }
  },
  /**
   * getHashrate
   * @params {}
   */
  {
    name: 'getHashrate',
    call: 'GetHashrate',
    params: {}
  },
  /**
   * isNodeMining
   * @params {}
   */
  {
    name: 'isNodeMining',
    call: 'isNodeMining',
    params: {}
  },
  /**
   * checkCode
   */
  {
    name: 'checkCode',
    call: '',
    params: { code: ['isString', 'required'] },
    endpoint: '/v1/checker'
  },
  /**
   * checkCodeTest
   */
  {
    name: 'checkCodeTest',
    call: '',
    params: { code: ['isString', 'required'] },
    endpoint: '/v1/runner'
  },
  /**
   * getBlockchainInfo
   * @params {}
   */
  {
    name: 'getBlockchainInfo',
    call: 'GetBlockchainInfo',
    params: {}
  },
  /**
   * getDSBlockListing
   * @params {page:Number}
   */
  {
    name: 'getDSBlockListing',
    call: 'DSBlockListing',
    params: {
      page: ['isNumber', 'required']
    }
  },
  /**
   * getTxBlockListing
   * @params {page:Number}
   */
  {
    name: 'getTxBlockListing',
    call: 'TxBlockListing',
    params: {
      page: ['isNumber', 'required']
    }
  },
  /**
   * getNumTxnsTxEpoch
   * @params {}
   */
  {
    name: 'getNumTxnsTxEpoch',
    call: 'GetNumTxnsTxEpoch',
    params: {}
  },
  /**
   * getNumTxnsDSEpoch
   * @params {}
   */
  {
    name: 'getNumTxnsDSEpoch',
    call: 'GetNumTxnsDSEpoch',
    params: {}
  },
  /**
   * getTransactionListing
   * @params {}
   */
  {
    name: 'getTransactionListing',
    call: 'GetTransactionListing',
    params: {}
  }
]
