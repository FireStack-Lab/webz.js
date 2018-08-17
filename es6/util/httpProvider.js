import axios from 'axios'
import qs from 'qs'
// import errors from 'errors'

class HttpProvider {
  constructor(url, timeout, user, password, headers) {
    this.url = url || 'http://localhost:4200'
    this.timeout = timeout || 0
    this.user = user
    this.password = password
    this.headers = headers
    this.request = axios.create()
    this.instance()
  }

  instance = () => {
    if (this.user && this.password) {
      const AUTH_TOKEN = `Basic ${Buffer.from(`${this.user}:${this.password}`).toString('base64')}`
      this.request.defaults.headers.common.Authorization = AUTH_TOKEN
    }
    this.request.defaults.headers.post['Content-Type'] = 'application/json'

    if (this.headers) {
      this.headers.forEach((header) => {
        this.request.defaults.headers.post[header.name] = header.value
      })
    }
  }

  send = async (payload) => {
    try {
      const response = await this.request(qs.stringify(payload))
      // console.log(response.data)
      // console.log(response.status)
      // console.log(response.statusText)
      // console.log(response.headers)
      // console.log(response.config)
      return response
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data)
        // console.log(error.response.status)
        // console.log(error.response.headers)
        return error.response
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request)
        return error.request
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message)
        return error.message
      }
      // console.log(error.config)
      return error.config
    }
  }

  sendAsync = (payload, callback) => {
    // const request = this.instance()
    this.request(qs.stringify(payload))
      .then((response) => {
        callback(response)
      })
      .catch(err => callback(err))
  }

  isConnected = () => {
    try {
      this.send({
        id: 1,
        jsonrpc: '2.0',
        method: 'GetNetworkId',
        params: []
      })
      return true
    } catch (e) {
      return false
    }
  }
}

export default HttpProvider
