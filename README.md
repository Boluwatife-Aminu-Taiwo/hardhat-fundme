# Hardhat Fund Me 

# Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

## Prerequisites
This is an example of how to list things you need to use the software and how to install them.

* yarn 

```shell
 yarn add --dev hardhat@2.9.3
 yarn hardhat 
 ``` 

make sure to choose Advanced hardhat project

## Installations

1. downloading the @chainlink/contracts from npm
```shell
yarn add --dev @chainlink/contracts
```
2. downloading the hardhat-deploy package plugin
```shell
yarn add --dev hardhat-deploy
```
3. adding hardhat-deploy-ethers to our package and replacing it with hardhat-ethers
```shell
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```


# Usage

## Deploy:
```shell
yarn hardhat deploy
```

## Testing:
*Unit Testing:
```shell
yarn test
```
*Staging Testing:
```shell
yarn test:staging 
```

## Coverage:
```shell
yarn coverage
```


# Deployment to testnet or mainnet
1. ### Setup environment variables
    You'll want to set your SEPOLIA_RPC_URL and PRIVATE_KEY as environment variables. You can add them to a .env file, similar to what you see in .env.example.

* PRIVATE_KEY: The private key of your account (like from [metamask](https://metamask.io/)). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  * You can learn how to [export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
* SEPOLIA_RPC_URL: This is url of the seplia testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. ### Get testnet ETH
    Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. ### Deploy

    ```shell
    yarn hardhat deploy --network sepolia
    ```

# Scripts
After deploy to a testnet or local net, you can run the scripts.
```shell
yarn hardhat run scripts/fund.js
```
Or
```shell
yarn hardhat run scripts/withdraw.js
```

# Formatting

```shell
yarn format
```

# Contact 

Boluwatife - [twitter](https://twitter.com/Gammatiff05 "twitter") - [LinkedIn](https://www.linkedin.com/in/boluwatife-aminutaiwo-7566b5220/ "linkedIn") - [email](https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZMzZcMHqMDvHssWLRNfDGVcnDJbhmpdNnDjFXwcdQFvMWPzPHltTLwftqHjNGwqhBPjQ "gmail")

# Acknowledgements

I want to use this to solidify my stance on the road to being a great Web3 developer. I want to thank [Patrick Collins](https://github.com/PatrickAlphaC) and FreeCodeCamp for giving a free tutorial on being a web3 developer. It has been a great journey thus far. I hope to make it to the end. 😇  

