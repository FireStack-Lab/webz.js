function validateSingleMessage(message) {
  return (
    !!message
    && !message.error
    && message.jsonrpc === '2.0'
    && typeof message.id === 'number'
    && message.result !== undefined
  ) // only undefined is not valid json object
}

class JsonRpc {
  constructor() {
    this.messageId = 0
  }

  toPayload = (method, params) => {
    if (!method) console.error('jsonrpc method should be specified!')

    // advance message ID
    this.messageId += 1

    return {
      jsonrpc: '2.0',
      id: this.messageId,
      method,
      params: params || []
    }
  }

  isValidResponse = (response) => {
    return Array.isArray(response)
      ? response.every(validateSingleMessage)
      : validateSingleMessage(response)
  }

  toBatchPayload = (messages) => {
    return messages.map((message) => {
      return this.toPayload(message.method, message.params)
    })
  }
}

export default JsonRpc
