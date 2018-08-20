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
  isBN,
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
  isBN: [isBN],
  isAddress: [isAddress]
}

class Method {
  constructor(options) {
    const {
      name, call, params, endpoint
    } = options
    this.name = name
    this.call = call
    this.messanger = null
    this.params = params
    this.endpoint = endpoint || 'client'
  }

  setMessanger = (msg) => {
    this.messanger = msg
  }

  generateValidateObjects = () => {
    const validatorObject = this.params

    const requiredArgs = {}
    const optionalArgs = {}
    for (const index in validatorObject) {
      if (index !== undefined) {
        const newObjectKey = index
        const newObjectValid = validatorObject[index][0]
        const isRequired = validatorObject[index][1]
        if (isRequired === 'required') {
          requiredArgs[newObjectKey] = validatorArray[newObjectValid]
        } else {
          optionalArgs[newObjectKey] = validatorArray[newObjectValid]
        }
      }
    }
    return { requiredArgs, optionalArgs }
  }

  validateArgs = (args, requiredArgs, optionalArgs) => {
    const reArgs = requiredArgs === undefined ? {} : requiredArgs
    const opArgs = optionalArgs === undefined ? {} : optionalArgs
    // console.log({ reArgs, opArgs })
    if (args && this.params !== {}) {
      return validateArgs(args, reArgs, opArgs)
    }
    return true
  }

  extractParams = (args) => {
    const paramsObject = isObject(args) ? args : {}
    let result
    const keyArrayLength = Object.keys(paramsObject).length

    if (keyArrayLength === 0) result = []
    else if (keyArrayLength === 1) {
      const resultKey = Object.keys(paramsObject)[0]
      result = [paramsObject[resultKey]]
    } else if (keyArrayLength > 1) {
      result = [paramsObject]
    }
    return result
  }

  methodBuilder = () => {
    if (this.messanger !== null && this.endPoint === 'client') {
      return (args, callback) => {
        const { requiredArgs, optionalArgs } = this.generateValidateObjects()
        this.validateArgs(args, requiredArgs, optionalArgs)
        const params = this.extractParams(args)
        if (callback) {
          return this.messanger.sendAsync({ method: this.call, params }, callback)
        }
        return this.messanger.send({ method: this.call, params })
      }
    }
    if (this.messanger !== null && this.endPoint !== 'client') {
      return (args, callback) => {
        const { requiredArgs, optionalArgs } = this.generateValidateObjects()
        this.validateArgs(args, requiredArgs, optionalArgs)
        const params = this.extractParams(args)
        if (callback) {
          return this.messanger.sendAsyncServer(this.endpoint, params, callback)
        }
        return this.messanger.sendServer(this.endpoint, params)
      }
    }
  }
}

export default Method
