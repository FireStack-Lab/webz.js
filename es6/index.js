//
//
//  Copyright
//
//
//

import util, { validateArgs } from './util'
import Schnorr from './schnorr'
import HttpProvider from './util/httpProvider'
import Messanger from './util/messanger'
import config from '../config.json'

// test function
import Zil from './zil'

class Webz {
  constructor(args) {
    validateArgs(args, {}, { nodeUrl: [util.isUrl] })
    this.url = args || config.defaultNodeUrl
    //
    this.version = config.version

    this.schnorr = new Schnorr()
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

  getLibraryVersion = () => this.version

  isConnected = () => this.zil && this.zil.isConnected()

  getProvider = () => this.currentProvider

  setProvider = (provider) => {
    validateArgs(
      provider,
      {},
      {
        nodeUrl: [util.isUrl]
      }
    )
    this.currentProvider = new HttpProvider(provider)
    this.messanger.setProvider(this.currentProvider)
  }
}

export default Webz
