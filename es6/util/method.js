import { InvalidNumberOfRPCParams } from './errors'
import { validateArgs } from './validator'

class Method {
  constructor(options) {
    const { name, call, params } = options
    this.name = name
    this.call = call
    this.params = params || 0
    this.messanger = null
  }

  setMessanger = (msg) => {
    this.messanger = msg
  }

  validateArgs = (args) => {
    if (args && this.params !== 0 && args.length !== this.params) {
      throw InvalidNumberOfRPCParams()
    }
    // validateArgs(args)
  }

  methodBuilder = () => {
    if (this.messanger !== null) {
      return (args, callback) => {
        this.validateArgs(args)
        if (callback) {
          this.messanger.sendAsync({ method: this.call, params: args }, callback)
        }
        this.messanger.send({ method: this.call, params: args })
      }
    }
  }
}

export default Method
