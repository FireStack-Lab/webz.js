import Method from '../util/method'
import ZilObjects from './Objects'

class Zil {
  constructor(Webz) {
    this.messanger = Webz.messanger
    this.mapObjectToMethods.bind(this)
  }

  mapObjectToMethods = () => {
    const MethodList = ZilObjects.map((data) => {
      const zilMethod = new Method(data)
      zilMethod.setMessanger(this.messanger)
      const zilKey = data.name
      const zilObject = {}
      zilObject[zilKey] = zilMethod
      return zilObject
    })
    // console.log({ MethodList })
    return MethodList
  }
}

export default Zil
