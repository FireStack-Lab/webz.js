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

class Webz {
  constructor(args) {
    // validateArgs(args, {}, { nodeUrl: [util.isUrl] })
    const url = args || util.config.defaultNodeUrl
    //
    this.util = util
    //
    this.currentProvider = new HttpProvider(url)
    this.messanger = new Messanger(this.currentProvider)
    //
    this.zil = new Zil(this)
  }

  providers = {
    HttpProvider
  }

  config = util.config

  // library method
  isConnected = async () => {
    const result = await this.zil.isConnected()
    try {
      return !(result instanceof Error)
    } catch (e) {
      return false
    }
  }

  getLibraryVersion = () => this.config.version

  getDefaultProviderUrl = () => this.config.defaultProviderUrl

  getDefaultAccount = () => this.config.defaultAccount

  getDefaultBlock = () => this.config.defaultBlock

  // provider method
  getProvider = () => this.currentProvider

  setProvider = (provider) => {
    this.currentProvider = new HttpProvider(provider)
    this.messanger.setProvider(this.currentProvider)
  }
}

export default Webz
