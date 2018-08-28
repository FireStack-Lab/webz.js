class Property {
  constructor(options) {
    const { name, getter, setter } = options
    this.name = name
    this.getter = getter
    this.setter = setter
    this.messanger = null
  }

  setMessanger = (msg) => {
    this.messanger = msg
  }

  propertyBuilder = () => {
    if (this.messanger !== null) {
      return (callback) => {
        if (callback) {
          return this.messanger.sendAsync({ method: this.getter }, callback)
        }
        return this.messanger.send({ method: this.getter })
      }
    }
  }
}

export default Property
