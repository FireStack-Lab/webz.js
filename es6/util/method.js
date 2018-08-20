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
    const requiredArgs = {}
    const optionalArgs = {}
    for (const index in validatorObject) {
      if (index !== undefined) {
        const validatorText = validatorObject[index]
        const keyItem = Object.keys(validatorText)
        const valueArray = Object.values(validatorText)
        console.log({ validatorText, keyItem, valueArray })
        const validatorMethod = validatorArray[valueArray[0]]
        if (valueArray[1] === 'required') {
          requiredArgs[keyItem[0]] = validatorMethod
        } else {
          optionalArgs[keyItem[0]] = validatorMethod
        }
      }
    }
    console.log({ requiredArgs, optionalArgs })
    if (args && this.params !== {}) {
      validateArgs(args, requiredArgs, optionalArgs)
    }

    // validateArgs(args)
  }

  extractParams = (args) => {
    const paramsObject = isObject(args) ? args : {}
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
