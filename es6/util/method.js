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
    const { name, call, params } = options
    this.name = name
    this.call = call
    this.messanger = null
    this.params = params
  }

  setMessanger = (msg) => {
    this.messanger = msg
  }

  validateArgs = (args) => {
    const validatorObject = this.params
    const newValidatorObject = {}
    for (const index in validatorObject) {
      if (index !== undefined) {
        const validatorText = validatorObject[index]
        const validatorMethod = validatorArray[validatorText]
        newValidatorObject[index] = validatorMethod
      }
    }
    if (args && this.params !== {}) {
      validateArgs(args, newValidatorObject)
    }
    // validateArgs(args)
  }

  extractParams = (args) => {
    const paramsObject = args
    let result

    const keyArrayLength = Object.keys(paramsObject).length

    if (keyArrayLength === 0) result = []
    else if (keyArrayLength === 1) {
      const resultKey = Object.keys(paramsObject)[0]
      result = paramsObject[resultKey]
    } else if (keyArrayLength > 1) {
      result = paramsObject
    }
    return result
  }

  methodBuilder = () => {
    if (this.messanger !== null) {
      return (args, callback) => {
        this.validateArgs(args)
        const params = this.extractParams(args)
        if (callback) {
          return this.messanger.sendAsync({ method: this.call, params }, callback)
        }
        return this.messanger.send({ method: this.call, params })
      }
    }
  }
}

export default Method
