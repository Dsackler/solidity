// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Owned.sol";
import "./Logger.sol";
import "./IFaucet.sol";

contract Faucet is Owned, Logger, IFaucet {

    uint public numOfFunders;
    mapping(address => bool) public funders;
    mapping(uint => address) public lutFunders; //look-up-table funders

    

    modifier limitWithdraw(uint withdrawAmount) {
        require(withdrawAmount <= 1000000000000000000, "Cannot withdraw more than 1 ether");
        _;
    }

    //special function that is called when you make a tx that doesnt specify a function name
    receive() external payable{}

    function emitLog() public override pure returns(string memory) {
        return "use this function because we implemented the abstract contract Logger";
    }

    function addFunds() external payable {
        address funder = msg.sender;
        if(!funders[funder]) {
            funders[funder] = true;
            lutFunders[numOfFunders] = funder;
            numOfFunders++;
        }
    }

    function withdraw(uint withdrawAmount) override external limitWithdraw(withdrawAmount) { //need override because of interface
        payable(msg.sender).transfer(withdrawAmount);
    }

    function getAllFunders() external view onlyOwner returns (address[] memory)  {
        address[] memory _funders = new address[](numOfFunders);
        for(uint i = 0; i < numOfFunders; i ++) {
            _funders[i] = lutFunders[i];
        } 

        return _funders;
    }
}

// const instance = await Faucet.deployed()
// instance.addFunds({from: accounts[0], value: "2000000000000000000"})
// instance.withdraw("2000000000000000000", {from: accounts[1]})