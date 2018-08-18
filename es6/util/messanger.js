import jsonRpc from './jsonRpc'
import { InvalidProvider, InvalidResponse } from './errors'
import { isArray } from './validator'

class Messanger {
  constructor(provider) {
    this.provider = provider
  }

  send = (data) => {
    if (!this.provider) {
      console.error(InvalidProvider())
      return null
    }
    const payload = jsonRpc.toPayload(data.method, data.params)
    const result = this.provider.send(payload)

    if (!jsonRpc.isValidResponse(result)) {
      throw InvalidResponse(result)
    }

    return result.result
  }

  sendAsync = (data, callback) => {
    if (!this.provider) {
      console.error(InvalidProvider())
      return null
    }
    const payload = jsonRpc.toPayload(data.method, data.params)
    this.provider.sendAsync(payload, (err, result) => {
      if (err) {
        return callback(err)
      }

      if (!jsonRpc.isValidResponse(result)) {
        return callback(InvalidResponse(result))
      }

      callback(null, result.result)
    })
  }

  sendBatch = (data, callback) => {
    if (!this.provider) {
      return callback(InvalidProvider())
    }

    const payload = jsonRpc.toBatchPayload(data)

    this.provider.sendAsync(payload, (err, results) => {
      if (err) {
        return callback(err)
      }

      if (!isArray(results)) {
        return callback(InvalidResponse(results))
      }

      callback(err, results)
    })
  }

  setProvider = (provider) => {
    this.provider = provider
  }
}

export default Messanger
