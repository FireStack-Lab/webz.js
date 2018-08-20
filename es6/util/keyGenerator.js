import randomBytes from 'randombytes'
import elliptic from 'elliptic'
import hashjs from 'hash.js'

import * as schnorr from '../schnorr'
import { intToByteArray } from './transformer'

const NUM_BYTES = 32
// const HEX_PREFIX = '0x';
const secp256k1 = elliptic.ec('secp256k1')

/**
 * generatePrivateKey
 *
 * @returns {string} - the hex-encoded private key
 */
export const generatePrivateKey = () => {
  let priv = ''
  const rand = randomBytes(NUM_BYTES)

  for (let i = 0; i < rand.byteLength; i += 1) {
    // add 00 in case we get an empty byte.
    const byte = rand[i]
    const hexstr = '00'.concat(byte.toString(16)).slice(-2)
    priv += hexstr
  }

  return priv
}

/**
 * getAddressFromPrivateKey
 *
 * takes a hex-encoded string (private key) and returns its corresponding
 * 20-byte hex-encoded address.
 *
 * @param {string} Key
 * @returns {string}
 */
export const getAddressFromPrivateKey = (privateKey) => {
  const keyPair = secp256k1.keyFromPrivate(privateKey, 'hex')
  const pub = keyPair.getPublic(true, 'hex')

  return hashjs
    .sha256()
    .update(pub, 'hex')
    .digest('hex')
    .slice(24)
}

/**
 * getPubKeyFromPrivateKey
 *
 * takes a hex-encoded string (private key) and returns its corresponding
 * hex-encoded 33-byte public key.
 *
 * @param {string} privateKey
 * @returns {string}
 */
export const getPubKeyFromPrivateKey = (privateKey) => {
  const keyPair = secp256k1.keyFromPrivate(privateKey, 'hex')
  return keyPair.getPublic(true, 'hex')
}

/**
 * compressPublicKey
 *
 * @param {string} publicKey - 65-byte public key, a point (x, y)
 *
 * @returns {string}
 */
export const compressPublicKey = (publicKey) => {
  return secp256k1.keyFromPublic(publicKey, 'hex').getPublic(true, 'hex')
}

/**
 * getAddressFromPublicKey
 *
 * takes hex-encoded string and returns the corresponding address
 *
 * @param {string} pubKey
 * @returns {string}
 */
export const getAddressFromPublicKey = (pubKey) => {
  return hashjs
    .sha256()
    .update(pubKey, 'hex')
    .digest('hex')
    .slice(24)
}

/**
 * verifyPrivateKey
 *
 * @param {string|Buffer} privateKey
 * @returns {boolean}
 */
export const verifyPrivateKey = (privateKey) => {
  const keyPair = secp256k1.keyFromPrivate(privateKey, 'hex')
  const { result } = keyPair.validate()
  return result
}

/**
 * encodeTransaction
 *
 * @param {any} txn
 * @returns {Buffer}
 */
export const encodeTransaction = (txn) => {
  const codeHex = Buffer.from(txn.code).toString('hex')
  const dataHex = Buffer.from(txn.data).toString('hex')

  const encoded = intToByteArray(txn.version, 64).join('')
    + intToByteArray(txn.nonce, 64).join('')
    + txn.to
    + txn.pubKey
    + txn.amount.toString('hex', 64)
    + intToByteArray(txn.gasPrice, 64).join('')
    + intToByteArray(txn.gasLimit, 64).join('')
    + intToByteArray(txn.code.length, 8).join('') // size of code
    + codeHex
    + intToByteArray(txn.data.length, 8).join('') // size of data
    + dataHex

  return Buffer.from(encoded, 'hex')
}

/**
 * createTransactionJson
 *
 * @param {string} privateKey
 * @param {TxDetails} txnDetails
 * @param {TxDetails}
 *
 * @returns {TxDetails}
 */
export const createTransactionJson = (privateKey, txnDetails) => {
  const pubKey = getPubKeyFromPrivateKey(privateKey)

  const txn = {
    version: txnDetails.version,
    nonce: txnDetails.nonce,
    to: txnDetails.to,
    amount: txnDetails.amount,
    pubKey,
    gasPrice: txnDetails.gasPrice,
    gasLimit: txnDetails.gasLimit,
    code: txnDetails.code || '',
    data: txnDetails.data || ''
  }

  const encodedTx = encodeTransaction(txn)

  // sign using schnorr lib
  const sig = schnorr.sign(encodedTx, Buffer.from(privateKey, 'hex'), Buffer.from(pubKey, 'hex'))

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
