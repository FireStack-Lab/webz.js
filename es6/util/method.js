import { InvalidNumberOfRPCParams } from './errors'
import {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isJson,
  isObject,
  isFunction,
  isHash,
  isUrl,
  isPubkey,
  isPrivateKey,
  isAddress,
  validateArgs
} from './validator'

const validatorArray = {
  isNumber: [isNumber],
  isString: [isString],
  isBoolean: [isBoolean],
  isArray: [isArray],
  isJson: [isJson],
  isObject: [isObject],
  isFunction: [isFunction],
  isHash: [isHash],
  isUrl: [isUrl],
  isPubkey: [isPubkey],
  isPrivateKey: [isPrivateKey],
  isAddress: [isAddress]
}

class Method {
  constructor(options) {
    const {
      name, call, params, validator
    } = options
    this.name = name
    this.call = call
    this.params = params || 0
    this.messanger = null
    this.validator = validator
  }

  setMessanger = (msg) => {
    this.messanger = msg
  }

  validateArgs = (args) => {
    const validatorObject = this.validator
    const newValidatorObject = {}
    for (const index in validatorObject) {
      if (index !== undefined) {
        const validatorText = validatorObject[index]
        const validatorMethod = validatorArray[validatorText]
        newValidatorObject[index] = validatorMethod
      }
    }

    if (args && this.params !== 0 && args.length !== this.params) {
      throw InvalidNumberOfRPCParams()
    } else if (args && this.params !== 0 && args.length === this.params) {
      validateArgs(args, newValidatorObject)
    }
    // validateArgs(args)
  }

  methodBuilder = () => {
    if (this.messanger !== null) {
      return (args, callback) => {
        this.validateArgs(args)
        if (callback) {
          return this.messanger.sendAsync({ method: this.call, params: args }, callback)
        }
        return this.messanger.send({ method: this.call, params: args })
      }
    }
  }
}

export default Method
