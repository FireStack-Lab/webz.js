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
import config from '../config.json'

const Node = syncNode
const { validateArgs } = util

class Webz {
  constructor(args) {
    validateArgs(args, {}, { nodeUrl: [util.isUrl] })
    this.version = config.version
    this.node = new Node({ url: args.nodeUrl || config.defaultNodeUrl })
    this.schnorr = new Schnorr()
    this.util = util
    this.HttpProvider = new HttpProvider(args.nodeUrl)
    this.data = {}
  }

  getLibraryVersion = () => this.version

  isConnected = () => this.node && this.node.isConnected()

  getNode = () => this.node

  setNode = (args) => {
    validateArgs(args, {
      nodeUrl: [util.isUrl]
    })
    this.node = new Node({ url: args.nodeUrl || config.defaultNodeUrl })
    return null
  }
}

export default Webz
