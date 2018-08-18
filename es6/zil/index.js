import Method from '../util/method'
import ZilObjects from './Objects'

class Zil {
  constructor(Webz) {
    this.messanger = Webz.messanger
    const MethodList = this.mapObjectToMethods()
    for (let i = 0; i < MethodList; i += 1) {
      const methodObj = MethodList[i]
      Object.assign({}, this, methodObj)
    }
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
