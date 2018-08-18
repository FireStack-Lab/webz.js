//
//
//  Copyright
//
//
//

import util from './util'
import { syncNode } from './node'
import Schnorr from './schnorr'
import HttpProvider from './util/httpProvider'
import Messanger from './util/messanger'
import config from '../config.json'

// test function
import Zil from './zil'

const Node = syncNode
const { validateArgs } = util

class Webz {
  constructor(args) {
    validateArgs(args, {}, { nodeUrl: [util.isUrl] })
    this.url = args || config.defaultNodeUrl

    //
    this.version = config.version
    this.node = new Node({ url: this.url })
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

  isConnected = () => this.node && this.node.isConnected()

  getNode = () => this.node

  setNode = (args) => {
    validateArgs(
      args,
      {},
      {
        nodeUrl: [util.isUrl]
      }
    )
    this.node = new Node({ url: args })
    return null
  }

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
  // setProvider=(provider)=>{
  //   validateArgs(provider, {
  //     nodeUrl: [util.isUrl]
  //   })
  //   this.provider=new HttpProvider(this.url)
  // }
}

export default Webz
