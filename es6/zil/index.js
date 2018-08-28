import Method from '../util/method'
import Property from '../util/property'
import {
  generatePrivateKey,
  getAddressFromPrivateKey,
  getPubKeyFromPrivateKey,
  isString
} from '../util'
import config from '../util/config'
import methodObjects from './methodObjects'
import propertyObjects from './propertyObjects'

const mapObjectToMethods = (main) => {
  methodObjects.map((data) => {
    const zilMethod = new Method(data)
    // const zilKey = data.name
    // const zilObject = {}
    zilMethod.setMessanger(main.messanger)
    zilMethod.assignToObject(main)
    // zilObject[zilKey] = zilMethod.methodBuilder()
    // Object.assign(main, zilObject)
    return false
  })
}

const mapPropertyToObjects = (main) => {
  propertyObjects.map((data) => {
    const zilProperty = new Property(data)
    const zilName = data.name
    zilProperty.setMessanger(main.messanger)
    //
    const asyncGetterName = (getName) => {
      return `get${getName.charAt(0).toUpperCase()}${getName.slice(1)}`
    }
    const zilObject = {
      get: zilProperty.propertyBuilder(),
      enumerable: true
    }
    const newZilObject = {}
    newZilObject[asyncGetterName(zilName)] = zilProperty.propertyBuilder()
    Object.defineProperty(main, zilName, zilObject)
    //
    Object.assign(main, newZilObject)
    return false
  })
}

class Zil {
  constructor(Webz) {
    this.messanger = Webz.messanger
    this.config = config
    mapObjectToMethods(this)
    mapPropertyToObjects(this)
  }

  /**
   * generate Key pairs and use WalletName as input param to identify
   * @param  {[type]} walletName [description]
   * @return {[type]}            [description]
   */
  generateWallet = (walletName) => {
    if (!isString(walletName)) throw Error('walletName has to be String')
    const walletPrivateKey = generatePrivateKey()
    const walletPublicKey = walletPrivateKey ? getPubKeyFromPrivateKey(walletPrivateKey) : null
    const walletAddress = walletPrivateKey ? getAddressFromPrivateKey(walletPrivateKey) : null
    const Wallet = {
      walletName,
      walletPublicKey,
      walletPrivateKey,
      walletAddress
    }
    return Wallet
  }

  get defaultBlock() {
    return this.config.defaultBlock
  }

  set defaultBlock(block) {
    this.config.defaultBlock = block
    return block
  }

  get defaultAccount() {
    return this.config.defaultAccount
  }

  set defaultAccount(account) {
    this.config.defaultAccount = account
    return account
  }
}

export default Zil
