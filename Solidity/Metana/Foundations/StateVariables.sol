// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract StateVariables {
    uint public myUint = 123; // state variable, stored on the blockchain. declared inside a contract, outside of a function

    function foo() external {
        uint notStateVariable = 456; // not a state variable, is a local variable
    }
}
