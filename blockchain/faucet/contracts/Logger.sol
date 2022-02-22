// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//abstract is a way for the designer to force the use of the defined functions
abstract contract Logger {
    function emitLog() public pure virtual returns(string memory);
}