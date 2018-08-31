# CheckList

## Main Object

| Web3            | Webz            |                          Description |    Decision |
| :-------------- | :-------------- | -----------------------------------: | ----------: |
| eth             | zil             |                            SubObject |         yes |
| db              | NA              |                            SubObject |         TBD |
| shh             | NA              |                            SubObject |         TBD |
| net             | NA              |                            SubObject |         TBD |
| personal        | NA              |                            SubObject | Considering |
| bzz             | NA              |                            SubObject |         TBD |
| settings        | NA              |                      setting for API | Considering |
| version         | version         |                  API library version |         yes |
| providers       | providers       |     Expose providers to Main Objects |         yes |
| setProvider     | setProvider     |                 Set provider for API |         yes |
| requestManager  | messanger       |        Deal with request to provider |         yes |
| currentProvider | currentProvider |                 Get provider for API |         yes |
| reset           | NA              | Reset connection for request manager |         TBD |
| isConnected     | isConnected     |                   Connection Checker |         yes |

## .utils

| Web3              | Webz              |                        Description |    Decision |
| :---------------- | :---------------- | ---------------------------------: | ----------: |
| randomHex         | NA                | Generate pseudo-random HEX strings |         TBD |
| \_                | NA                |                 Underscore Library |         TBD |
| BN                | NA                |                         BN library |         TBD |
| BigNumber         | NA                |  BN library exposed to Main Object |         TBD |
| isBN              | NA                |                   DataType checker |         TBD |
| isBigNumber       | NA                |                   DataType checker |         TBD |
| sha3              | NA                |                    SHA3 calculator |         TBD |
| soliditySha3      | NA                |       SHA3 calculator for solidity |         TBD |
| isHex             | NA                |                   DataType checker |         TBD |
| isHexStrict       | NA                |                   DataType checker |         TBD |
| isAddress         | isAddress         |                   DataType checker |         Yes |
| isChecksumAddress | isChecksumAddress |                   DataType checker | Considering |
| toChecksumAddress | toChecksumAddress |                   Data transformer | Considering |
| hexToNumberString | NA                |                   Data transformer |         TBD |
| hexToNumber       | NA                |                   Data transformer |         TBD |
| numberToHex       | NA                |                   Data transformer |         TBD |
| hexToUtf8         | NA                |                   Data transformer |         TBD |
| hexToAscii        | NA                |                   Data transformer |         TBD |
| utf8ToHex         | NA                |                   Data transformer |         TBD |
| asciiToHex        | NA                |                   Data transformer |         TBD |
| hexToBytes        | NA                |                   Data transformer |         TBD |
| bytesToHex        | NA                |                   Data transformer |         TBD |
| toWei             | NA                |                   Data transformer |         TBD |
| fromWei           | NA                |                   Data transformer |         TBD |
| unitMap           | NA                |                   Data Unit Mapper | Considering |
| isIBAN            | NA                |                   DataType checker |         TBD |
| padLeft           | padLeft           |                 Array manipulation | Considering |
| padRight          | padRight          |                 Array manipulation | Considering |
| toTwosComplement  | NA                |                 Array manipulation | Considering |
| Internal          | ----              |                                --- |         --- |
| toHex             | toHex             |                   Data transformer | Considering |
| toBN              | NA                |                   Data transformer | Considering |
| toAscii           | toAscii           |                   Data transformer | Considering |
| toUtf8            | toUtf8            |                   Data transformer | Considering |
| fromAscii         | fromAscii         |                   Data transformer | Considering |
| fromUtf8          | fromUtf8          |                   Data transformer | Considering |
| toDecimal         | toDecimal         |                   Data transformer | Considering |
| fromDecimal       | fromDecimal       |                   Data transformer | Considering |

## .eth/.zil

| Web3                     | Webz |                                                                   Description | Decision |
| :----------------------- | :--- | ----------------------------------------------------------------------------: | -------: |
| subscribe                | NA   |                                                                     SubObject |      TBD |
| Contract                 | NA   |                                                                     SubObject |      TBD |
| Iban                     | NA   |                                                                     SubObject |      TBD |
| personal                 | NA   |                                                                     SubObject |      TBD |
| accounts                 | NA   |                                                                     SubObject |      TBD |
| abi                      | NA   |                                                                     SubObject |      TBD |
| net                      | NA   |                                                                     SubObject |      TBD |
| setProvider              | NA   |                                                          Set Provider for API |      TBD |
| providers                | NA   |                                                      Providers setted for API |      TBD |
| givenProvider            | NA   |                                    Set Provider for API based on browser type |      TBD |
| currentProvider          | NA   |                                   Current Provider setted for current browser |      TBD |
| BatchRequest             | NA   |                                             Create and execute batch requests |      TBD |
| extend                   | NA   |                                             Allows extending the web3 modules |      TBD |
| defaultAccount           | NA   |                                   This default address is used as the default |      TBD |
| defaultBlock             | NA   |                                     This default block is used as the default |      TBD |
| getProtocolVersion       | NA   |                                     Get protocol version of the provider node |      TBD |
| isSyncing                | NA   |                                          Check provider node if it is syncing |      TBD |
| getCoinbase              | NA   |                               Returns the coinbase address that award will go |      TBD |
| isMining                 | NA   |                                           Check provider node if it is mining |      TBD |
| getHashrate              | NA   |                                          Get hashes per second of mining node |      TBD |
| getGasPrice              | NA   |                                                 Returns the current gas price |      TBD |
| getAccounts              | NA   |                                  Returns a list of accounts the node controls |      TBD |
| getBlockNumber           | NA   |                                              Returns the current block number |      TBD |
| getBalance               | NA   |                                Get the balance of an address at a given block |      TBD |
| getStorageAt             | NA   |                                                 Get the storage of an address |      TBD |
| getCode                  | NA   |                                            Get the code at a specific address |      TBD |
| getBlock                 | NA   |                              Returns a block matching the block number / hash |      TBD |
| getBlockTransactionCount | NA   |                            Returns the number of transaction in a given block |      TBD |
| getUncle                 | NA   |                        Returns a blocks uncle by a given uncle index position |      TBD |
| getTransaction           | NA   |                     Returns a transaction matching the given transaction hash |      TBD |
| getTransactionFromBlock  | NA   |         Returns a transaction based on a block hash/number and index position |      TBD |
| getTransactionReceipt    | NA   |                      Returns the receipt of a transaction by transaction hash |      TBD |
| getTransactionCount      | NA   |                        Get the numbers of transactions sent from this address |      TBD |
| sendTransaction          | NA   |                                            Sends a transaction to the network |      TBD |
| sendSignedTransaction    | NA   |                                           Sends an already signed transaction |      TBD |
| sign                     | NA   |                                           Signs data using a specific account |      TBD |
| signTransaction          | NA   |                                                           Signs a transaction |      TBD |
| call                     | NA   |                                   Executes a message call transaction,unmined |      TBD |
| estimateGas              | NA   | Executes a message call or transaction and returns the amount of the gas used |      TBD |
| getPastLogs              | NA   |                                    Gets past logs, matching the given options |      TBD |
| getWork                  | NA   |                                               Gets work for miners to mine on |      TBD |
| submitWork               | NA   |                                  Used for submitting a proof-of-work solution |      TBD |

## .eth.subscribe/

| Web3                             | Webz |                                    Description | Decision |
| :------------------------------- | :--- | ---------------------------------------------: | -------: |
| subscribe                        | NA   | Subscribe to specific events in the blockchain |      TBD |
| clearSubscriptions               | NA   |                           Resets subscriptions |      TBD |
| subscribe(“pendingTransactions”) | NA   |    Subscribes to incoming pending transactions |      TBD |
| subscribe(“newBlockHeaders”)     | NA   |           Subscribes to incoming block headers |      TBD |
| subscribe(“syncing”)             | NA   |                    Subscribe to syncing events |      TBD |
| subscribe(“logs”)                | NA   |                    Subscribes to incoming logs |      TBD |

## .eth.Contract/

| Web3                         | Webz |                                                     Description | Decision |
| :--------------------------- | :--- | --------------------------------------------------------------: | -------: |
| new contract                 | NA   |                                 Creates a new contract instance |      TBD |
| = Properties =               | NA   |                                                              NA |      TBD |
| options                      | NA   |                    The options object for the contract instance |      TBD |
| options.address              | NA   |                     The address used for this contract instance |      TBD |
| options.jsonInterface        | NA   | The json interface object derived from the ABI of this contract |      TBD |
| = Methods =                  | NA   |                                                              NA |      TBD |
| clone                        | NA   |                            Clones the current contract instance |      TBD |
| deploy                       | NA   |                           Deploy the contract to the blockchain |      TBD |
| methods                      | NA   |                    Creates a transaction object for that method |      TBD |
| methods.myMethod.call        | NA   |  Call a “constant” method and execute its smart contract method |      TBD |
| methods.myMethod.send        | NA   | Send a transaction to the smart contract and execute its method |      TBD |
| methods.myMethod.estimateGas | NA   |                             Estimate the gas a method execution |      TBD |
| methods.myMethod.encodeABI   | NA   |                                 Encodes the ABI for this method |      TBD |
| = Events =                   | NA   |                                                              NA |      TBD |
| once                         | NA   |       Subscribes to a single event and unsubscribes immediately |      TBD |
| events                       | NA   |                                           Subscribe to an event |      TBD |
| events.allEvents             | NA   |     Subscribes but receives all events from this smart contract |      TBD |
| getPastEvents                | NA   |                              Gets past events for this contract |      TBD |

## .eth.accounts/

| Web3                | Webz |                                                                 Description | Decision |
| :------------------ | :--- | --------------------------------------------------------------------------: | -------: |
| create              | NA   |                 Generates an account object with private key and public key |      TBD |
| privateKeyToAccount | NA   |                                Creates an account object from a private key |      TBD |
| signTransaction     | NA   |                      Signs an Ethereum transaction with a given private key |      TBD |
| recoverTransaction  | NA   |                                         Get address form signed transaction |      TBD |
| hashMessage         | NA   |                          Hashes the given message to be passed to recover() |      TBD |
| sign                | NA   |                                                        Signs arbitrary data |      TBD |
| recover             | NA   |                                       Recovers the address from signed data |      TBD |
| encrypt             | NA   |                     Encrypts a private key to the web3 keystore v3 standard |      TBD |
| decrypt             | NA   |                        Decrypts a keystore v3 JSON, and creates the account |      TBD |
| wallet              | NA   |                         Contains an in memory wallet with multiple accounts |      TBD |
| wallet.create       | NA   |                                Generates one or more accounts in the wallet |      TBD |
| wallet.add          | NA   |         Adds an account using a private key or account object to the wallet |      TBD |
| wallet.remove       | NA   |                                          Removes an account from the wallet |      TBD |
| wallet.clear        | NA   |                    Securely empties the wallet and removes all its accounts |      TBD |
| wallet.encrypt      | NA   | Encrypts all wallet accounts to and array of encrypted keystore v3 objects. |      TBD |
| wallet.decrypt      | NA   |                                                Decrypts keystore v3 objects |      TBD |
| wallet.save         | NA   |        Stores the wallet encrypted and as string in browser's local storage |      TBD |
| wallet.load         | NA   |                           Loads a wallet from local storage and decrypts it |      TBD |

## .eth.personal/

| Web3            | Webz |                                Description | Decision |
| :-------------- | :--- | -----------------------------------------: | -------: |
| setProvider     | NA   |                Set Provider for its module |      TBD |
| providers       | NA   |           Expose providers to Main Objects |      TBD |
| givenProvider   | NA   | Set Provider for API based on browser type |      TBD |
| currentProvider | NA   |                       Get provider for API |      TBD |
| BatchRequest    | NA   |          Create and execute batch requests |      TBD |
| extend          | NA   |          Allows extending the web3 modules |      TBD |
| newAccount      | NA   |                      Creates a new account |      TBD |
| sign            | NA   |        Signs data using a specific account |      TBD |
| ecRecover       | NA   |  Recovers the account that signed the data |      TBD |
| signTransaction | NA   |                        Signs a transaction |      TBD |
| unlockAccount   | NA   |        Signs data using a specific account |      TBD |

## .eth.Iban/( to be done )

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

## .eth.abi/ ( to be done )

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

## \*.net/ ( to be done )

| Web3         | Webz | Description | Decision |
| :----------- | :--- | ----------: | -------: |
| getId        | NA   |          NA |      TBD |
| isListening  | NA   |          NA |      TBD |
| getPeerCount | NA   |          NA |      TBD |

## .bzz/ ( to be done )

| Web3            | Webz | Description | Decision |
| :-------------- | :--- | ----------: | -------: |
| setProvider     | NA   |          NA |      TBD |
| givenProvider   | NA   |          NA |      TBD |
| currentProvider | NA   |          NA |      TBD |
| upload          | NA   |          NA |      TBD |
| download        | NA   |          NA |      TBD |
| pick            | NA   |          NA |      TBD |

## .shh/ ( to be done )

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
