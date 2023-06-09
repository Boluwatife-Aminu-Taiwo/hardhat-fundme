const { network } = require("hardhat")
const { networkConfig, developmentChain } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
require("dotenv").config()
module.exports = async ({ getNamedAccounts, deployments }) => {
    // we use the deployments object to get two thing: 1. to get the deploy function 2. to get the log function

    const { deploy, log } = deployments
    // getNamedAccounts is a way to get the name of the account deploying the script
    const { deployer } = await getNamedAccounts()

    const chainId = network.config.chainId

    // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    let ethUsdPriceFeedAddress
    if (developmentChain.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    // the idea of mocking is if the contract doesn't exist, we deploy a minimal version for our local testing
    const args = [ethUsdPriceFeedAddress]
    // when going for a localhost or hardhat network we want to use a mock
    const fundMe = await deploy("FundMe", {
        from: deployer,
        // args are what you put in your constructor
        args: args, //put price feed address
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    if (
        !developmentChain.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, args)
    }
    log("-----------------------------------")
}

// hre means hardhat runtime environment

module.exports.tags = ["all", "fundme"]
