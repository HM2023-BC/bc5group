const HDWalletProvider = require("@truffle/hdwallet-provider");
const gasPrice = 1000000000; //process.env.GASPRICE;
let privateKeys =
    ["fa9b0c94eab6c91f4ac6e65fc957a2bbc1caa866f1eeeb15bab2a44c4f764473"];
const network = "http://bops.morpheuslabs.io:24681";
const chainId = 1271;
module.exports = {
    compilers: {
        solc: {
            //version: "0.5.8",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                },
                //evmVersion: 'petersburg'
            },
        },
    },
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        // network for unit testing
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
            gas: 5000000,
        },
        private_poa: {
            provider: function () {
                return new HDWalletProvider(
                    {
                        privateKeys: privateKeys,
                        providerOrUrl: network,
                        chainId: chainId
                    }
                )
            },
            network_id: "*",
            gas: 6000000,
            gasPrice: gasPrice
        }
    }
};