require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain erosion good entire success genuine'; 
let testAccounts = [
"0xfda7567e735ea274b169afd2e99ce47b1b76d6c2738d6b7beb71f3942a9b5ac7",
"0x69c6c1c37ac5f52d41f6ef5c8e23a5e84291c0f7e3c7df8e1b6aecc475fb70ba",
"0x7fdb8af5bfffa08f4e7580d921fa0c8b5d9f791491bb6e21ead2f1c570cfcb15",
"0xb1a8e549f01743319ed457c18939366a9cf6bcd96d5f6c390e39d7f2edb9d0e5",
"0xc1dfa96ff831832c4737d73ff063c0c02aac46be3e0d4b0f05617133334f450c",
"0x522064a1516308926efcd52e28cb1d43e1e52da0e8976b3dad371fe06ad735bc",
"0xbe6e2122555c19019e33c4155e51dc1e71f82ade011e0368f55c697220de75d0",
"0x82a23bf1016e3a200ffb74cf21b4bb73c38cb76db63aa165f219420b205b0940",
"0x7886900bc0c79597a06a508b63e59e12ea4706592795aa9bfb25fe951b26688a",
"0x9a7fba9d69ef3dd6b1ff93dc6e6fa1bd9a6ab0dd05b2521d8d96dd464a1eecf9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


