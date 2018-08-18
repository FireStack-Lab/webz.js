export default [
  {
    name: 'getNetworkId',
    call: 'GetNetworkId',
    params: 0,
    validator: {}
  },
  {
    name: 'isConnected',
    call: 'GetNetworkId',
    params: 0,
    validator: {}
  },
  {
    name: 'getBalance',
    call: 'GetBalance',
    params: 1,
    validator: {
      address: 'isAddress'
    }
  }
]
