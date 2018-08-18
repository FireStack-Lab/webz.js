import Method from '../util/method'
import ZilObjects from './Objects'

class Zil {
  constructor(Webz) {
    this.messanger = Webz.messanger
    this.mapObjectToMethods()
  }

  mapObjectToMethods = () => {
    ZilObjects.map((data) => {
      const zilMethod = new Method(data)
      zilMethod.setMessanger(this.messanger)
      const zilKey = data.name
      const zilObject = {}
      zilObject[zilKey] = zilMethod
      return Object.assign(this, zilObject)
      // return Object.assign(self, zilObject)
    })
  }
}

export default Zil
