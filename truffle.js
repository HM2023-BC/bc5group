const HDWalletProvider = require("@truffle/hdwallet-provider");
const gasPrice = 1000000000; //process.env.GASPRICE;
let privateKeys =
    ["25e3db4be2045384f62b79f574efac92972ed86e6b8a0dcf5f4af463250623f6"];
const network = "http://bops.morpheuslabs.io:24681";
const chainId = 1271;
module.exports = {
    compilers: {
        solc: {
            version: "0.5.16",
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