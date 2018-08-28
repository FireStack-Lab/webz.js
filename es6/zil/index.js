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
    zilMethod.setMessanger(main.messanger)
    zilMethod.assignToObject(main)
    return false
  })
}

const mapPropertyToObjects = (main) => {
  propertyObjects.map((data) => {
    const zilProperty = new Property(data)
    zilProperty.setMessanger(main.messanger)
    zilProperty.assignToObject(main)
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
