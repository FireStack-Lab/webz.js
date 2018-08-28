//
//
//  Copyright
//
//
//

import * as util from './util'
import HttpProvider from './util/httpProvider'
import Messanger from './util/messanger'

// test function
import Zil from './zil'

const { validateArgs, config } = util

class Webz {
  constructor(args) {
    validateArgs(args, {}, { nodeUrl: [util.isUrl] })
    this.url = args || config.defaultNodeUrl
    //
    this.version = config.version

    this.util = util
    //
    this.currentProvider = new HttpProvider(this.url)
    this.messanger = new Messanger(this.currentProvider)

    //
    this.zil = new Zil(this)
    this.data = {}
  }

  providers = {
    HttpProvider
  }

  // library method
  isConnected = () => this.zil && this.zil.isConnected()

  getLibraryVersion = () => this.version

  // provider method
  getProvider = () => this.currentProvider

  setProvider = (provider) => {
    validateArgs(provider, {
      nodeUrl: [util.isUrl]
    })
    this.currentProvider = new HttpProvider(provider)
    this.messanger.setProvider(this.currentProvider)
  }

  // zil related method
  getBalance = address => this.zil.getBalance(address)

  generateWallet = walletName => this.zil.generateWallet(walletName)

  getNetworkType = () => {}

  getAccounts = (pubkeyArray) => {
    if (!util.isArray(pubkeyArray) && pubkeyArray.length === 0) throw Error('Input has to be non-empty Array')
    const newPubkeyArray = pubkeyArray.map(d => util.isPubkey(d)).filter(t => !!t)
    if (newPubkeyArray.length !== pubkeyArray.length) throw Error('one or some public key(s) inputted is invalid')
    const resultArray = pubkeyArray.map(k => util.getAddressFromPublicKey(k))
    return resultArray || []
  }
}

export default Webz
