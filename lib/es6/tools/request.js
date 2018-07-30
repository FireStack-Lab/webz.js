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
    .then(data => cb(null, data))
    .catch(error => cb(error))
}

const asyncRpcAjax = (url, method, params) => {
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
    .then(data => (data ? data.result : null))
    .catch(error => error)
}

const serverAjax = (url, body) => {
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
    .then(data => cb(null, data))
    .catch(error => cb(error))
}

const asyncServerAjax = (url, body) => {
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
    .then(data => data)
    .catch(error => error)
}

export { rpcAjax, serverAjax, asyncRpcAjax, asyncServerAjax }
