// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Mapping {
    mapping(address => uint) public balances;
    mapping(address => mapping(address => bool)) public isFriend;

    function setBalance(uint _balance) external {
        balances[msg.sender] = _balance;

        delete balances[msg.sender]; // delete the key-value pair
    }

    function setFriend(address _address) public {
        isFriend[msg.sender][_address] = true;
    }
}
