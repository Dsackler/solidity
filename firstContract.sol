pragma solidity >= 0.4.17; //specifies version

contract Inbox { //Defines contract. Similar to a class
    string public message; //declare instance (storage) variable


    //This is the constructor
    function Inbox(string initialMessage) public { //function that is a member of the contract
        message = initialMessage;
    }

    //this is a transaction because it can modify the contracts data
    //it takes time to execute, returns the transaction hash, and costs money
    function setMessage(string newMessage) public {
        message = newMessage;
    }

    //this isnot a transaction
    //cannot modify the contract's data
    //can return data
    //runs instantly
    //free
    function getMessage() public view returns (string) { //function is not needed
        return message;
    }
}

//Common function types: 
// public: anyone can call this function
// private : only this contract can call this function
// view : This function returns data and does NOT modify the contract's data
// constant : this function returns data and does NOT modify the contract's data
// pure : Function will NOT modify or even read the contract's data
// payable: when function is called, they might send ether 