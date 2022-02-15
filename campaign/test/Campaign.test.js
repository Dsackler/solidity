const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) //use this way when wanting to deploy new instance
        .deploy({data: compiledFactory.bytecode})
        .send({from: accounts[0], gas: '1000000'});

    await factory.methods.createCampaign('100').send({ //this does not give us anything to use. It just creates the campaign. We MUST USE THE GET DEPLOYED CAMPAIGNS function we made
        from: accounts[0], //assume accounts[0] is the manager
        gas: '1000000'
    });

    const address = await factory.methods.getDeployedCampaigns().call(); //we use call() because it is vew.
    campaignAddress = address[0]; //address is an array of campaigns. Since we only made one, can just say address[0]

    campaign = await new web3.eth.Contract( //use this method when wanting to interact with already deployed instance
        JSON.parse(compiledCampaign.interface),
        campaignAddress //pass in address of already deployed version
    );
});
