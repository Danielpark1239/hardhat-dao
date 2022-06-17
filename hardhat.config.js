/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
// const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY
// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        // rinkeby: {
        //     chainId: 4,
        //     url: RINKEBY_RPC_URL,
        //     accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        //     saveDeployments: true,
        //     blockConfirmations: 6,
        // },
        // goerli: {
        //     chainId: 5,
        //     url: GOERLI_RPC_URL,
        //     accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        //     saveDeployments: true,
        //     blockConfirmations: 6,
        // },
    },
    gasReporter: {
        enabled: false,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        // coinmarketcap: COINMARKETCAP_API_KEY,
        // token: "MATIC", //ex. deploy to Polygon
    },
    solidity: {
        compilers: [{ version: "0.8.9" }, { version: "0.8.0" }],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 200000, // 200 seconds max
    },
    etherscan: {
        apiKey: {
            rinkeby: process.env.ETHERSCAN_API_KEY,
        },
    },
}