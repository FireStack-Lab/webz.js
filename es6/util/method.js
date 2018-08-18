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
    if (args.length !== this.params) {
      throw InvalidNumberOfRPCParams()
    }
    // validateArgs(args)
  }

  methodBuilder = () => {
    if (this.messanger !== null) {
      const builder = () => {
        this.messanger.send(this.call)
      }
      return builder
    }
  }
}

export default Method
