import axios from 'axios'
// import errors from 'errors'

class HttpProvider {
  constructor(url, timeout, user, password, headers) {
    this.url = url || 'http://localhost:4200'
    this.timeout = timeout || 0
    this.user = user
    this.password = password
    this.headers = headers
    this.axios = this.instance()
  }

  instance = () => {
    const request = axios.create()
    if (this.user && this.password) {
      const AUTH_TOKEN = `Basic ${Buffer.from(`${this.user}:${this.password}`).toString('base64')}`
      request.defaults.headers.common.Authorization = AUTH_TOKEN
    }
    request.defaults.headers.post['Content-Type'] = 'application/json'

    if (this.headers) {
      this.headers.forEach((header) => {
        request.defaults.headers.post[header.name] = header.value
      })
    }
    if (this.timeout) {
      request.defaults.timeout = this.timeout
    }
    return request
  }

  send = async (payload) => {
    const result = await this.axios
      .post(this.url, JSON.stringify(payload))
      .then((response) => {
        const { data, status } = response
        if (data.result && status === 200) {
          return data.result
        }
      })
      .catch(err => err)
    return result
  }

  sendServer = async (endpoint, payload) => {
    const result = await this.axios
      .post(`${this.url}${endpoint}`, JSON.stringify(payload))
      .then((response) => {
        const { data, status } = response
        if (data.result && status === 200) {
          return data.result
        }
      })
      .catch(err => err)
    return result
  }

  sendAsync = (payload, callback) => {
    // const request = this.instance()
    // console.log(JSON.stringify(payload))
    this.axios
      .post(this.url, JSON.stringify(payload))
      .then((response) => {
        const { data, status } = response
        if (data.result && status === 200) {
          callback(null, data.result)
        }
      })
      .catch(err => callback(err))
  }

  sendAsyncServer = (endpoint, payload, callback) => {
    // const request = this.instance()
    // console.log(JSON.stringify(payload))
    this.axios
      .post(`${this.url}${endpoint}`, JSON.stringify(payload))
      .then((response) => {
        const { data, status } = response
        if (data.result && status === 200) {
          callback(null, data.result)
        }
      })
      .catch(err => callback(err))
  }
}

export default HttpProvider
