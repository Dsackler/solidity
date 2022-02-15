const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');


//HDWalletProvider specifies which account we want to use and use as a source of ether
//Also speicfies what outside API or node we want to connect to

const provider = new HDWalletProvider(
    'sister pulse can devote heart lunch canyon solution cloud number hood term', //this specifies the account
    'https://rinkeby.infura.io/v3/e488d3c1ca45448c8e352d5409ca4594' //this is the node we connect to
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);
    
    const result = await new web3.eth.Contract(compiledFactory.abi) //need to pass in interface to the contract
        .deploy({ data: compiledFactory.evm.bytecode.object }) //pass in the bytecode.
        .send({gas: '10000000', from: accounts[0]});

    
    console.log('Deployed to: ', result.options.address);
    provider.engine.stop();
};
deploy();