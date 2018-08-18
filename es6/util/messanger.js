import JsonRpc from './jsonRpc'
import { InvalidProvider } from './errors'

class Messanger {
  constructor(provider) {
    this.provider = provider
    this.JsonRpc = new JsonRpc()
  }

  send = async (data) => {
    if (!this.provider) {
      console.error(InvalidProvider())
      return null
    }
    const payload = this.JsonRpc.toPayload(data.method, data.params)
    const result = await this.provider.send(payload)

    return result
  }

  sendAsync = (data, callback) => {
    if (!this.provider) {
      console.error(InvalidProvider())
      return null
    }
    const payload = this.JsonRpc.toPayload(data.method, data.params)
    this.provider.sendAsync(payload, (err, result) => {
      if (err) {
        return callback(err)
      }
      callback(null, result)
    })
  }

  sendBatch = (data, callback) => {
    if (!this.provider) {
      console.error(InvalidProvider())
      return null
    }

    const payload = this.JsonRpc.toBatchPayload(data)

    this.provider.sendAsync(payload, (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(err, results)
    })
  }

  setProvider = (provider) => {
    this.provider = provider
  }
}

export default Messanger
