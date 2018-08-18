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
    this.messanger = new Messanger(this.url)
    this.currentProvider = args.nodeUrl

    //
    this.data = {}
  }

  providers = {
    HttpProvider
  }

  getLibraryVersion = () => this.version

  isConnected = () => this.node && this.node.isConnected()

  getNode = () => this.node

  setNode = (args) => {
    validateArgs(args, {
      nodeUrl: [util.isUrl]
    })
    this.node = new Node({ url: args })
    return null
  }

  getProvider = () => this.currentProvider

  setProvider = (provider) => {
    validateArgs(provider, {
      nodeUrl: [util.isUrl]
    })
    this.messanger.setProvider(provider)
    this.currentProvider = provider
  }
  // setProvider=(provider)=>{
  //   validateArgs(provider, {
  //     nodeUrl: [util.isUrl]
  //   })
  //   this.provider=new HttpProvider(this.url)
  // }
}

export default Webz
