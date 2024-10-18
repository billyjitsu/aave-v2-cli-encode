require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');
require("@nomicfoundation/hardhat-verify");

require('dotenv').config();

const fs = require('fs');
let config = require('./config.json');

module.exports = {
  networks: { 
    custom: {
      url: config.network.rpc,
      chainId: config.network.chainId,
      accounts: {
        mnemonic: process.env.mnemonic
      }
    }
   },
  etherscan: {
    apiKey: ""
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};