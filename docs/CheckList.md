# CheckList

## Main Object

| Web3            | Webz            |                          Description |    Decision |
| :-------------- | :-------------- | -----------------------------------: | ----------: |
| requestManager  | messanger       |        deal with request to provider |         yes |
| currentProvider | currentProvider |                         get provider |         yes |
| eth             | zil             |            access the blockchain api |         yes |
| db              | NA              |              access the database api |         TBD |
| shh             | NA              |                   access the shh api |         TBD |
| net             | NA              |             access the peer2peer net |         TBD |
| personal        | NA              |               access personal wallet | Considering |
| bzz             | NA              |            interact swarm file store |         TBD |
| settings        | NA              |                      setting for API | Considering |
| version         | version         |                  API library version |         yes |
| providers       | providers       |     expose providers to Main Objects |         yes |
| setProvider     | setProvider     |                 set provider for API |         yes |
| reset           | NA              | reset connection for request manager |         TBD |
| isConnected     | isConnected     |       check if provider is connected |         yes |

## .utils

| Web3              | Webz              |                              Description |    Decision |
| :---------------- | :---------------- | ---------------------------------------: | ----------: |
| randomHex         | NA                |                                       NA |         TBD |
| \_                | NA                |                                       NA |         TBD |
| BN                | NA                | BigNumber Function Expose to Main Object |         TBD |
| BigNumber         | NA                | BigNumber Function Expose to Main Object |         TBD |
| isBN              | NA                |                                       NA |         TBD |
| isBigNumber       | NA                |                                       NA |         TBD |
| sha3              | NA                |                                       NA |         TBD |
| soliditySha3      | NA                |                                       NA |         TBD |
| isHex             | NA                |                                       NA |         TBD |
| isHexStrict       | NA                |                                       NA |         TBD |
| isAddress         | isAddress         |                 check if data is Address |         Yes |
| isChecksumAddress | isChecksumAddress |        check if data is Checksum Address | Considering |
| toChecksumAddress | toChecksumAddress |        transform data to ChecksumAddress | Considering |
| hexToNumberString | NA                |                                       NA |         TBD |
| hexToNumber       | NA                |                                       NA |         TBD |
| numberToHex       | NA                |                                       NA |         TBD |
| hexToUtf8         | NA                |                                       NA |         TBD |
| hexToAscii        | NA                |                                       NA |         TBD |
| utf8ToHex         | NA                |                                       NA |         TBD |
| asciiToHex        | NA                |                                       NA |         TBD |
| hexToBytes        | NA                |                                       NA |         TBD |
| bytesToHex        | NA                |                                       NA |         TBD |
| toWei             | NA                |                    transform data to Wei |         TBD |
| fromWei           | NA                |                  transform data from Wei |         TBD |
| unitMap           | NA                |                       Array manipulation | Considering |
| isIBAN            | NA                |                    check if data is IBAN |         TBD |
| padLeft           | padLeft           |                       Array manipulation | Considering |
| padRight          | padRight          |                       Array manipulation | Considering |
| toTwosComplement  | NA                |                       Array manipulation | Considering |
| Internal          | ----              |                                      --- |         --- |
| toHex             | toHex             |                    transform data to Hex | Considering |
| toBN              | NA                |                       Array manipulation | Considering |
| toAscii           | toAscii           |                  transform data to Ascii | Considering |
| toUtf8            | toUtf8            |                   transform data to Utf8 | Considering |
| fromAscii         | fromAscii         |                transform data from Ascii | Considering |
| fromUtf8          | fromUtf8          |                 transform data from Utf8 | Considering |
| toDecimal         | toDecimal         |                transform data to Decimal | Considering |
| fromDecimal       | fromDecimal       |              transform data from Decimal | Considering |

## .eth/.zil

| Web3                     | Webz | Description | Decision |
| :----------------------- | :--- | ----------: | -------: |
| subscribe                | NA   |   SubObject |      TBD |
| Contract                 | NA   |   SubObject |      TBD |
| Iban                     | NA   |   SubObject |      TBD |
| personal                 | NA   |   SubObject |      TBD |
| accounts                 | NA   |   SubObject |      TBD |
| abi                      | NA   |   SubObject |      TBD |
| net                      | NA   |   SubObject |      TBD |
| setProvider              | NA   |          NA |      TBD |
| providers                | NA   |          NA |      TBD |
| givenProvider            | NA   |          NA |      TBD |
| currentProvider          | NA   |          NA |      TBD |
| BatchRequest             | NA   |          NA |      TBD |
| extend                   | NA   |          NA |      TBD |
| defaultAccount           | NA   |          NA |      TBD |
| defaultBlock             | NA   |          NA |      TBD |
| getProtocolVersion       | NA   |          NA |      TBD |
| isSyncing                | NA   |          NA |      TBD |
| getCoinbase              | NA   |          NA |      TBD |
| isMining                 | NA   |          NA |      TBD |
| getHashrate              | NA   |          NA |      TBD |
| getGasPrice              | NA   |          NA |      TBD |
| getAccounts              | NA   |          NA |      TBD |
| getBlockNumber           | NA   |          NA |      TBD |
| getBalance               | NA   |          NA |      TBD |
| getStorageAt             | NA   |          NA |      TBD |
| getCode                  | NA   |          NA |      TBD |
| getBlock                 | NA   |          NA |      TBD |
| getBlockTransactionCount | NA   |          NA |      TBD |
| getUncle                 | NA   |          NA |      TBD |
| getTransaction           | NA   |          NA |      TBD |
| getTransactionFromBlock  | NA   |          NA |      TBD |
| getTransactionReceipt    | NA   |          NA |      TBD |
| getTransactionCount      | NA   |          NA |      TBD |
| sendTransaction          | NA   |          NA |      TBD |
| sendSignedTransaction    | NA   |          NA |      TBD |
| sign                     | NA   |          NA |      TBD |
| signTransaction          | NA   |          NA |      TBD |
| call                     | NA   |          NA |      TBD |
| estimateGas              | NA   |          NA |      TBD |
| getPastLogs              | NA   |          NA |      TBD |
| getWork                  | NA   |          NA |      TBD |
| submitWork               | NA   |          NA |      TBD |

## .eth.subscribe/

| Web3                             | Webz | Description | Decision |
| :------------------------------- | :--- | ----------: | -------: |
| subscribe                        | NA   |   SubObject |      TBD |
| clearSubscriptions               | NA   |          NA |      TBD |
| subscribe(“pendingTransactions”) | NA   |          NA |      TBD |
| subscribe(“newBlockHeaders”)     | NA   |          NA |      TBD |
| subscribe(“syncing”)             | NA   |          NA |      TBD |
| subscribe(“logs”)                | NA   |          NA |      TBD |

## .eth.Contract/

| Web3                         | Webz | Description | Decision |
| :--------------------------- | :--- | ----------: | -------: |
| new contract                 | NA   |          NA |      TBD |
| = Properties =               | NA   |          NA |      TBD |
| options                      | NA   |          NA |      TBD |
| options.address              | NA   |          NA |      TBD |
| options.jsonInterface        | NA   |          NA |      TBD |
| = Methods =                  | NA   |          NA |      TBD |
| clone                        | NA   |          NA |      TBD |
| deploy                       | NA   |          NA |      TBD |
| methods                      | NA   |          NA |      TBD |
| methods.myMethod.call        | NA   |          NA |      TBD |
| methods.myMethod.send        | NA   |          NA |      TBD |
| methods.myMethod.estimateGas | NA   |          NA |      TBD |
| methods.myMethod.encodeABI   | NA   |          NA |      TBD |
| = Events =                   | NA   |          NA |      TBD |
| once                         | NA   |          NA |      TBD |
| events                       | NA   |          NA |      TBD |
| events.allEvents             | NA   |          NA |      TBD |
| getPastEvents                | NA   |          NA |      TBD |

## .eth.accounts/

| Web3                | Webz | Description | Decision |
| :------------------ | :--- | ----------: | -------: |
| create              | NA   |          NA |      TBD |
| privateKeyToAccount | NA   |          NA |      TBD |
| signTransaction     | NA   |          NA |      TBD |
| recoverTransaction  | NA   |          NA |      TBD |
| hashMessage         | NA   |          NA |      TBD |
| sign                | NA   |          NA |      TBD |
| recover             | NA   |          NA |      TBD |
| encrypt             | NA   |          NA |      TBD |
| decrypt             | NA   |          NA |      TBD |
| wallet              | NA   |          NA |      TBD |
| wallet.create       | NA   |          NA |      TBD |
| wallet.add          | NA   |          NA |      TBD |
| wallet.remove       | NA   |          NA |      TBD |
| wallet.clear        | NA   |          NA |      TBD |
| wallet.encrypt      | NA   |          NA |      TBD |
| wallet.decrypt      | NA   |          NA |      TBD |
| wallet.save         | NA   |          NA |      TBD |
| wallet.load         | NA   |          NA |      TBD |

## .eth.personal/

| Web3            | Webz | Description | Decision |
| :-------------- | :--- | ----------: | -------: |
| setProvider     | NA   |          NA |      TBD |
| providers       | NA   |          NA |      TBD |
| givenProvider   | NA   |          NA |      TBD |
| currentProvider | NA   |          NA |      TBD |
| BatchRequest    | NA   |          NA |      TBD |
| extend          | NA   |          NA |      TBD |
| newAccount      | NA   |          NA |      TBD |
| sign            | NA   |          NA |      TBD |
| ecRecover       | NA   |          NA |      TBD |
| signTransaction | NA   |          NA |      TBD |
| unlockAccount   | NA   |          NA |      TBD |

## .eth.Iban/

| Web3                  | Webz | Description | Decision |
| :-------------------- | :--- | ----------: | -------: |
| Iban instance         | NA   |          NA |      TBD |
| Iban contructor       | NA   |          NA |      TBD |
| toAddress             | NA   |          NA |      TBD |
| toIban                | NA   |          NA |      TBD |
| fromAddress           | NA   |          NA |      TBD |
| fromBban              | NA   |          NA |      TBD |
| createIndirect        | NA   |          NA |      TBD |
| isValid               | NA   |          NA |      TBD |
| prototype.isValid     | NA   |          NA |      TBD |
| prototype.isDirect    | NA   |          NA |      TBD |
| prototype.isIndirect  | NA   |          NA |      TBD |
| prototype.checksum    | NA   |          NA |      TBD |
| prototype.institution | NA   |          NA |      TBD |
| prototype.client      | NA   |          NA |      TBD |
| prototype.toAddress   | NA   |          NA |      TBD |
| prototype.toString    | NA   |          NA |      TBD |

## .eth.abi/

| Web3                    | Webz | Description | Decision |
| :---------------------- | :--- | ----------: | -------: |
| encodeFunctionSignature | NA   |          NA |      TBD |
| encodeEventSignature    | NA   |          NA |      TBD |
| encodeParameter         | NA   |          NA |      TBD |
| encodeParameters        | NA   |          NA |      TBD |
| encodeFunctionCall      | NA   |          NA |      TBD |
| decodeParameter         | NA   |          NA |      TBD |
| decodeParameters        | NA   |          NA |      TBD |
| decodeLog               | NA   |          NA |      TBD |

## \*.net/

| Web3         | Webz | Description | Decision |
| :----------- | :--- | ----------: | -------: |
| getId        | NA   |          NA |      TBD |
| isListening  | NA   |          NA |      TBD |
| getPeerCount | NA   |          NA |      TBD |

## .bzz/

| Web3            | Webz | Description | Decision |
| :-------------- | :--- | ----------: | -------: |
| setProvider     | NA   |          NA |      TBD |
| givenProvider   | NA   |          NA |      TBD |
| currentProvider | NA   |          NA |      TBD |
| upload          | NA   |          NA |      TBD |
| download        | NA   |          NA |      TBD |
| pick            | NA   |          NA |      TBD |

## .shh/

| Web3                       | Webz | Description | Decision |
| :------------------------- | :--- | ----------: | -------: |
| setProvider                | NA   |          NA |      TBD |
| providers                  | NA   |          NA |      TBD |
| givenProvider              | NA   |          NA |      TBD |
| currentProvider            | NA   |          NA |      TBD |
| BatchRequest               | NA   |          NA |      TBD |
| extend                     | NA   |          NA |      TBD |
| getId                      | NA   |          NA |      TBD |
| isListening                | NA   |          NA |      TBD |
| getPeerCount               | NA   |          NA |      TBD |
| getVersion                 | NA   |          NA |      TBD |
| getInfo                    | NA   |          NA |      TBD |
| setMaxMessageSize          | NA   |          NA |      TBD |
| setMinPoW                  | NA   |          NA |      TBD |
| markTrustedPeer            | NA   |          NA |      TBD |
| newKeyPair                 | NA   |          NA |      TBD |
| addPrivateKey              | NA   |          NA |      TBD |
| deleteKeyPair              | NA   |          NA |      TBD |
| hasKeyPair                 | NA   |          NA |      TBD |
| getPublicKey               | NA   |          NA |      TBD |
| getPrivateKey              | NA   |          NA |      TBD |
| newSymKey                  | NA   |          NA |      TBD |
| addSymKey                  | NA   |          NA |      TBD |
| generateSymKeyFromPassword | NA   |          NA |      TBD |
| hasSymKey                  | NA   |          NA |      TBD |
| getSymKey                  | NA   |          NA |      TBD |
| deleteSymKey               | NA   |          NA |      TBD |
| post                       | NA   |          NA |      TBD |
| subscribe                  | NA   |          NA |      TBD |
| clearSubscriptions         | NA   |          NA |      TBD |
| newMessageFilter           | NA   |          NA |      TBD |
| deleteMessageFilter        | NA   |          NA |      TBD |
| getFilterMessages          | NA   |          NA |      TBD |
