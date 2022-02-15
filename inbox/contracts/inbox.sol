// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.11; //specifies version

contract Inbox { 
    string public message; 

    constructor(string memory initialMessage) public { //function that is a member of the contract
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
