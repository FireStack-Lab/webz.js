import { isWebUri } from 'valid-url'
import { sha256, secp256k1, aes } from 'bcrypto'
import Schnorr from '../schnorr'

/**
 * generate a new private key using the secp256k1 curve
 * returns a Buffer object,
 * @return {Buffer} [description]
 */
const generatePrivateKey = () => {
  return secp256k1.generatePrivateKey()
}

/**
 * verify if the private key is valid for the secp256k1 curve
 * inputs Buffer and returns true/false
 * @param  {Buffer[string|hex]} privateKey [description]
 * @return {Boolean}            [description]
 */
const verifyPrivateKey = (privateKey) => {
  let pKey
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    // privateKey = new Buffer(privateKey, 'hex')
    pKey = Buffer.from(privateKey, 'hex')
  } else pKey = privateKey

  return secp256k1.privateKeyVerify(pKey)
}

/**
 * get the public address of an account using its private key
 * @param  {[Buffer[string|hex]} privateKey [description]
 * @return {[string]}            [description]
 */
const getAddressFromPrivateKey = (privateKey) => {
  let pKey
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(privateKey, 'hex')
  } else pKey = privateKey

  const pubKey = secp256k1.publicKeyCreate(pKey, true)
  const pubKeyHash = sha256.digest(pubKey) // sha256 hash of the public key
  const address = pubKeyHash.toString('hex', 12) // rightmost 160 bits/20 bytes of the hash

  return address
}

/**
 * get the public key of an account using its private key
 * @param  {Buffer[string|hex]} privateKey [description]
 * @return {[string]}            [description]
 */
const getPubKeyFromPrivateKey = (privateKey) => {
  let pKey
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(privateKey, 'hex')
  } else pKey = privateKey

  return secp256k1.publicKeyCreate(pKey, true)
}

/**
 * Get address from a public key
 * @param  {[hex|string]} pubKey [description]
 * @return {[string]}        [description]
 */
const getAddressFromPublicKey = (pubKey) => {
  let pKey
  if (typeof pubKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(pubKey, 'hex')
  } else pKey = pubKey
  const pubKeyHash = sha256.digest(pKey) // sha256 hash of the public key
  const address = pubKeyHash.toString('hex', 12) // rightmost 160 bits/20 bytes of the hash
  return address
}

/**
 * construct the transaction json
 * input the privateKey and transaction object
 * @param  {Buffer[string|hex]} privateKey [description]
 * @param  {[Object]} txnDetails [description]
 * @return {[string]}            [description]
 */
const createTransactionJson = (privateKey, txnDetails) => {
  let pKey
  if (typeof privateKey === 'string') {
    // new Buffer has been deprecated
    pKey = Buffer.from(privateKey, 'hex')
  } else pKey = privateKey

  const pubKey = secp256k1.publicKeyCreate(pKey, true)

  const txn = {
    version: txnDetails.version,
    nonce: txnDetails.nonce,
    to: txnDetails.to,
    amount: txnDetails.amount,
    pubKey: pubKey.toString('hex'),
    gasPrice: txnDetails.gasPrice,
    gasLimit: txnDetails.gasLimit,
    code: txnDetails.code || '',
    data: txnDetails.data || ''
  }

  // new Buffer has been deprecated
  // const codeHex = new Buffer(txn.code).toString('hex')
  // const dataHex = new Buffer(txn.data).toString('hex')

  const codeHex = Buffer.alloc(txn.code).toString('hex')
  const dataHex = Buffer.alloc(txn.data).toString('hex')

  const msg = intToByteArray(txn.version, 64).join('')
    + intToByteArray(txn.nonce, 64).join('')
    + txn.to
    + txn.pubKey
    + intToByteArray(txn.amount, 64).join('')
    + intToByteArray(txn.gasPrice, 64).join('')
    + intToByteArray(txn.gasLimit, 64).join('')
    + intToByteArray(txn.code.length, 8).join('') // size of code
    + codeHex
    + intToByteArray(txn.data.length, 8).join('') // size of data
    + dataHex

  // sign using schnorr lib
  const schnorr = new Schnorr()

  // new Buffer has been deprecated
  // const messageHex = new Buffer(msg, 'hex')
  const messageHex = Buffer.from(msg, 'hex')
  const sig = schnorr.sign(messageHex, pKey, pubKey)

  let r = sig.r.toString('hex')
  let s = sig.s.toString('hex')
  while (r.length < 64) {
    r = `0${r}`
  }
  while (s.length < 64) {
    s = `0${s}`
  }
  txn.signature = r + s

  return txn
}

/**
 * make sure each of the keys in requiredArgs is present in args
 * @param  {[type]} args         [description]
 * @param  {[type]} requiredArgs [description]
 * @param  {[type]} optionalArgs [description]
 * @return {[type]}              [description]
 */
const validateArgs = (args, requiredArgs, optionalArgs) => {
  for (const key in requiredArgs) {
    if (args[key] !== undefined) {
      for (let i = 0; i < requiredArgs[key].length; i += 1) {
        if (typeof requiredArgs[key][i] !== 'function') throw new Error('Validator is not a function')

        if (!requiredArgs[key][i](args[key])) throw new Error(`Validation failed for ${key}`)
      }
    } else throw new Error(`Key not found: ${key}`)
  }

  for (const key in optionalArgs) {
    if (args[key]) {
      for (let i = 0; i < optionalArgs[key].length; i += 1) {
        if (typeof optionalArgs[key][i] !== 'function') throw new Error('Validator is not a function')

        if (!optionalArgs[key][i](args[key])) throw new Error(`Validation failed for ${key}`)
      }
    }
  }
  return true
}

/**
 * verify if address is correct
 * @param  {[hex|string]}  address [description]
 * @return {Boolean}         [description]
 */
const isAddress = (address) => {
  return !!address.match(/^[0-9a-fA-F]{40}$/)
}

/**
 * verify if privateKey is correct
 * @param  {[hex|string]}  privateKey [description]
 * @return {Boolean}            [description]
 */
const isPrivateKey = (privateKey) => {
  return !!privateKey.match(/^[0-9a-fA-F]{64}$/)
}

/**
 * verify if public key is correct
 * @param  {[hex|string]}  pubkey [description]
 * @return {Boolean}        [description]
 */
const isPubkey = (pubkey) => {
  return !!pubkey.match(/^[0-9a-fA-F]{66}$/)
}

/**
 * verify if url is correct
 * @param  {[string]}  url [description]
 * @return {Boolean}     [description]
 */
const isUrl = (url) => {
  return isWebUri(url)
}

/**
 * verify if hash is correct
 * @param  {[string]}  txHash [description]
 * @return {Boolean}        [description]
 */
const isHash = (txHash) => {
  return !!txHash.match(/^[0-9a-fA-F]{64}$/)
}

/**
 * verify if it is number type
 * @param  {[number]}  number [description]
 * @return {Boolean}        [description]
 */
const isNumber = (number) => {
  return typeof number === 'number'
}

/**
 * verify if it is string
 * @param  {[string]}  string [description]
 * @return {Boolean}        [description]
 */
const isString = (string) => {
  return typeof string === 'string'
}

/**
 * convert number to array representing the padded hex form
 * @param  {[string]} val        [description]
 * @param  {[number]} paddedSize [description]
 * @return {[string]}            [description]
 */
const intToByteArray = (val, paddedSize) => {
  const arr = []

  const hexVal = val.toString(16)
  const hexRep = []

  let i
  for (i = 0; i < hexVal.length; i += 1) {
    hexRep[i] = hexVal[i].toString()
  }

  for (i = 0; i < paddedSize - hexVal.length; i += 1) {
    arr.push('0')
  }

  for (i = 0; i < hexVal.length; i += 1) {
    arr.push(hexRep[i])
  }

  return arr
}

export default {
  aes,
  generatePrivateKey,
  verifyPrivateKey,
  getAddressFromPrivateKey,
  getPubKeyFromPrivateKey,
  getAddressFromPublicKey,
  createTransactionJson,
  validateArgs,
  isAddress,
  isPrivateKey,
  isPubkey,
  isUrl,
  isHash,
  isNumber,
  isString,
  intToByteArray
}
