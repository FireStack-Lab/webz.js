import { sha256, secp256k1, aes } from 'bcrypto'
import Schnorr from '../schnorr'
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

import {
  intToByteArray, toHex, toUtf8, toAscii, fromUtf8, fromAscii
} from './transformer'
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

  const codeHex = Buffer.from(txn.code).toString('hex')
  const dataHex = Buffer.from(txn.data).toString('hex')

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

export default {
  // algos
  aes,
  // key gen and verify
  generatePrivateKey,
  verifyPrivateKey,
  // get pub/address from key pairs
  getAddressFromPrivateKey,
  getPubKeyFromPrivateKey,
  getAddressFromPublicKey,
  // create transaction
  createTransactionJson,
  // transformer
  intToByteArray,
  toHex,
  toUtf8,
  toAscii,
  fromUtf8,
  fromAscii,
  // validator
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
}
