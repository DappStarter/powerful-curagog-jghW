require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remain huge include arctic swift solution'; 
let testAccounts = [
"0x6834b551a14255a37e56e4cd8b667176ed49144197c943e34001c80c52f30f25",
"0xd2d83f858091777dcce4f8c4a92994ea0189618c6516ff1168a5a933cdf2f0c1",
"0x2139c75fbf518018547a4ca49e24c1f673e1cb7b9fea93dfcca671db70aeee2a",
"0x64b00b1c50c0660cbd15b834a1f42d01d09fb806f32574d67432aa73158f21ca",
"0x1ae6fcd4b1b42b8d69a7d6014887b8f4446bdfc260832b41e9a893ef10e98112",
"0x380f9ec255e76b1ce60410ad61056a70c536720c937cd8b7fc68b24ba03316f0",
"0x3496dd72538ac026ca47243b53e8ff6ba771c2a5f736d2eb78326f8ae65b4d29",
"0xdedb7b41b450411ab5c2751af0435d662817c5e43b61b8ec0eed30537eae3f0d",
"0x165c23700c0cf69802a230da90419493765296670ffe93bb1a6045adba312951",
"0x4313b33ef15e11e2ef383e328af3e91986be820dd3839c8df35fde1843810cef"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

