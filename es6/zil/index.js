import Method from '../util/method'
import ZilObjects from './Objects'

class Zil {
  constructor(Webz) {
    this.messanger = Webz.messanger
    this.mapObjectToMethods()
  }

  mapObjectToMethods = () => {
    const MethodList = ZilObjects.map((data) => {
      const zilMethod = new Method(data)
      zilMethod.setMessanger(this.messanger)
      return zilMethod
    })
    console.log({ MethodList })
    return MethodList
  }
}

export default Zil