const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf-8');

const input = {
    language: 'Solidity',
    sources: {
      'Lottery.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };
   
  module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Lottery.sol'
  ].Lottery; //only interested in the inbox part of the object


//Solidity compiler spits out bytecode and an ABI (an interface)
//We take the bytecode and deploy our contract to a local test network
//Using ganache as local test network

//we take the ABI, which is a javasript interface, and deploy it to Web3