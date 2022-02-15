// SPDX-License-Identifier: MIT

pragma solidity >= 0.8.11;

contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() {
        manager = msg.sender; //msg is a global variable available on function call or transavtion. It has msg.data, msg.sender, msg.whatever. 
    }

    function enter() public payable {
        require(msg.value > .01 ether, "Please enter at least .01 ether");
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        //keccak is an algorithm that takes in some data and spits out a really big number in hexadecimal
        //we need the abi.encode because of weird version control
        return uint(keccak256(abi.encode(block.difficulty, block.timestamp, players))); //block.difficulty is time it takes to mine block, timestamp is current time
    }

    function pickWinner() public restricted { //uses the restricted function modifier created below to make sure that only the manager can use pickWinner

        uint index = random() % players.length;
        //must mark the players[index] as payable because money is being sent to it
        payable(players[index]).transfer(address(this).balance); //transfer all money from contract (address(this).balance) to the winner (player[index])
        players = new address[](0); //replace players array with empty array with an initial size of zero 
    }

    modifier restricted() { //This is a function modifier
        require(msg.sender == manager);
        _; //this is a little weird. Basically, when restricted is added to a function, the underscore is where the rest of the code is placed
        //so if the underscore was above the require line, the require statement would come after the code
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}

