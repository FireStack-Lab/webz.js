import Method from '../util/method'
import {
  generatePrivateKey,
  getAddressFromPrivateKey,
  getPubKeyFromPrivateKey,
  isString
} from '../util'
import ZilObjects from './Objects'

const mapObjectToMethods = (main) => {
  ZilObjects.map((data) => {
    const zilMethod = new Method(data)
    const zilKey = data.name
    const zilObject = {}
    zilMethod.setMessanger(main.messanger)
    zilObject[zilKey] = zilMethod.methodBuilder()
    return Object.assign(main, zilObject)
  })
}

class Zil {
  constructor(Webz) {
    this.messanger = Webz.messanger
    mapObjectToMethods(this)
  }

  generateWallet = (walletName) => {
    if (!isString(walletName)) throw Error('walletName has to be String')
    const walletPrivateKey = generatePrivateKey()
    const walletPublicKey = getPubKeyFromPrivateKey(walletPrivateKey)
    const walletAddress = getAddressFromPrivateKey(walletPrivateKey)
    const Wallet = {
      walletName,
      walletPublicKey,
      walletPrivateKey,
      walletAddress
    }
    return Wallet
  }
}

export default Zil
