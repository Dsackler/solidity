const assert = require('assert');
const ganache = require('ganache-cli'); //local test network
const Web3 = require('web3'); //capital W because we are calling the constructor
const web3 = new Web3(ganache.provider()); //can change the provider when this is actually deployed to a network

const { abi, evm } = require('../compile'); //abi is the interface, evm contains the bytecode

let lottery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    lottery = await new web3.eth.Contract(abi) //creating instance of the contract and passing in the interface
        .deploy({data: evm.bytecode.object})
        .send({from: accounts[0], gas: '1000000'});
});

describe('Lottery Contract', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address); //if an address exists, the contract has been deployed
    });

    it('allows one account to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0] //speficying that accounts[0] is calling the function
        });

        assert.equal(accounts[0], players[0]); //players[0] should be accounts[0]
        assert.equal(1, players.length); //length of players should be 1
    });

    it('allows multiple accounts to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0] //speficying that accounts[0] is calling the function
        });

        assert.equal(accounts[0], players[0]); //players[0] should be accounts[0]
        assert.equal(accounts[1], players[1]); //players[1] should be accounts[1]
        assert.equal(accounts[2], players[2]); //players[2] should be accounts[2]
        assert.equal(3, players.length); //length of players should be 3
    });

    it('requires a minimum amount of ether to enter', async () => {
        try {
            await lottery.methods.enter().send({
                from: accounts[0],
                value: 0 //less than .01 ether
            });
            assert(false); //if an error is not thrown, we want the test to fail
        } catch (error) {
            assert(error); //we actually want this to happen
        }
    });

    it('only allows manager to pick winner', async () => {
        try {
            await lottery.methods.pickWinner().send({ //we do not need to enter into the contract. It has nothing to do with people entering the lottery
                from: accounts[1] //this is not the manager
            });
            assert(false);
        } catch (error) {
            assert(error); //If it fails, that means someone other than the manager tried. So we want it to fail
        }
    });

    it('sends money to the winner and resets the players array', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('2', 'ether')
        });

        const playersBeforeWinner = await lottery.methods.getPlayers().call({ //check that amount of players is 1
            from: accounts[0]
        });

        assert.equal(1, playersBeforeWinner.length); //length of players should be 1
        
        //because we sent 2 ether, we should be 2 ether less
        const initialBalance = await web3.eth.getBalance(accounts[0]); //returns balance in wei that an account owns

        //now after picking the winner, we should get our 2 ether back
        await lottery.methods.pickWinner().send({
            from: accounts[0]
        });

        const playersAfterWinner = await lottery.methods.getPlayers().call({ //need to check the length of players after winnder is called
            from: accounts[0]
        });

        assert.equal(0, playersAfterWinner); //must be zero. Check if array was cleared

        const finalBalance = await web3.eth.getBalance(accounts[0]);

        const difference = finalBalance - initialBalance;

        assert(difference > web3.utils.toWei('1.8', 'ether')); //without paying gas, it would be 2, but we do spend gas

    });
});