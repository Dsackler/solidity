// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


//similar to abstract classes. 
//cannot inherit from other smart contract, only inherit from other interfaces.

//Cannot declare a constructor
//Cannot declare state variables
//all functions must be external
interface IFaucet {
    function addFunds() external payable;
    function withdraw(uint withdrawAmount) external;
}