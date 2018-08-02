import fetch from 'node-fetch'

const rpcAjax = (url, method, params, cb) => {
  return fetch(url, {
    body: JSON.stringify({
      jsonrpc: '2.0',
      method,
      params: [params],
      id: 1
    }),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer'
  })
    .then(response => response.json())
    .then((data) => {
      console.log({ cb })
      return cb !== undefined && typeof cb === 'function'
        ? cb(null, data)
        : data
          ? data.result
          : null
    })
    .catch(error => (cb !== undefined && typeof cb === 'function' ? cb(error) : error))
}

const serverAjax = (url, body, cb) => {
  return fetch(url, {
    body: JSON.stringify(body),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer'
  })
    .then(response => response.json())
    .then(
      data => (cb !== undefined && typeof cb === 'function' ? cb(null, data) : data ? data.result : null)
    )
    .catch(error => (cb !== undefined && typeof cb === 'function' ? cb(error) : error))
}

export { rpcAjax, serverAjax }
