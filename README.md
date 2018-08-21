# webz.js

![travis](https://travis-ci.com/FireStack-Lab/webz.js.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/webz.js.svg?style=flat-square)](https://www.npmjs.org/package/webz.js)

Inspired by Web3.js

This is a #BuildOnZil grant program

See [Zilliqa's Official Post](https://blog.zilliqa.com/announcing-the-first-zilliqa-ecosystem-grant-awardees-4ccb39ef83c9)

## Readme First

This API is inspired by Web3.js, somehow features and functions are different from it

To clear the path for Zilliqa and this library.
We decide to make a check list to see which ones should be implemented.
You should check the list below:

### [Features CheckList Compared to Web3.js](./docs/CheckList.md)

## Installation

### Install from npm/yarn

```
npm i -S webz.js
// or
yarn add webz.js
```

## Usage

### import/Require

```Javascript
import Webz from 'webz.js'
// use 'require' in strict mode
// const Webz = require('webz.js')

// {nodeUrl:URL} has to be initialized
const webz=Webz({nodeUrl:'http://localhost:4200'})

// you can set provider simply using setProvider()
let providerUrl='https://api-scilla.zilliqa.com'

// set the new provider
const newProvider=webz.setProvider(prividerUrl)

// test if it sets correctly
console.log(newProvider.url)
// ouput in console
// 'https://api-scilla.zilliqa.com'
```

### In Html `<Script/>` Tag

```html
<!-- load the browser version js in Html -->
<script src="../pathToLibrary/Webz.browser.js"></script>
<!--
...
// then you can access Webz Object
// but remember it's a constructor, new Webz() first
-->
<script>

// {nodeUrl:URL} has to be initialized
var webz =new Webz({nodeUrl:'http://localhost:4200'})

// you can set provider simply using setProvider()
var providerUrl = 'https://api-scilla.zilliqa.com'

// set the new provider
var newProvider=webz.setProvider(prividerUrl)

// test if it sets correctly
console.log(newProvider.url)

// ouput in console
// 'https://api-scilla.zilliqa.com'
</script>
```

## Build this library manually

1.  clone this repo
2.  npm install
3.  npm run dist

### there are 6 files located in /dist folder

- webz.js
- webz.js.map
- webz.browser.js
- webz.browser.js.map
- webz.server.js
- webz.server.js.map

### you can use them in different environments

## API Docs

to be done

## Examples

### Simple HTML

See /example folder

### Complex Example

#### [webz-examples](https://github.com/FireStack-Lab/webz-examples)

It's a React WebApp using umijs and dvajs

A small explorer and wallet App

## Other Must Have Libraries

### Official JS-Lib:[zilliqa-js](https://github.com/Zilliqa/Zilliqa-JavaScript-Library)

Official javascript library created by Zilliqa Core Team

Most Webz.js features inherite from it

### JSON_RPC Tool:[kaya](https://github.com/Zilliqa/kaya)

A JSON\*RPC Dev tool emulated the behaviour of Zilliqa blockchain

Also great work from Zilliqa Core Team

!! Strongly Recommended !!

when you start building DApps with Webz.js

### Awesome Resource:[Awesome-Zilliqa](https://github.com/FireStack-Lab/Awesome-Zilliqa)

A repo that collect most libraries and docs from dev community

Edited and updated by FireStack Team, A star is truly welcomed.
