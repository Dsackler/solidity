//Steps mocha takes
//1 Mocha starts
//2 Deploy contract (beforeEach)
//3 manipulae the contract (it)
//4 make an assertion about he contract (it)
//then repeat at deploy a new contract

const assert = require('assert');
const ganache = require('ganache-cli'); //ganache is a local network
const Web3 = require('web3'); //capital W because it is a contructor function. We use this to create instances
const web3 = new Web3(ganache.provider()); //A provider is like a telephone in between ganache and web3\
const { abi, evm } = require('../compile'); //abi is the interface, evm is the bytecode



let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(abi) //abi is the interface
      .deploy({
        data: evm.bytecode.object, //want the bytecode of the evm
        arguments: ['Hi there!'],
      })
      .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address); //if an address exists, the contract has been deployed
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }


// let car;

// beforeEach(() => {
//     car = new Car();
// });

// describe('myCar', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });

