// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract TestContract1 {
    address public owner = msg.sender;
     function setOwner(address _owner) public {
        require(msg.sender == owner, "You are not the owner");
        owner = _owner;
     }
}

contract TestContract2 {
    address public owner = msg.sender;
    uint public value = msg.value;
    uint public x;
    uint public y;

    contructor(uint _x, uint _y) payable {
        x = _x;
        y = _y;
    }

contract Proxy {
    function deploy(bytes memory _code) external payble returns (address addr) {
        assembly {
            // create(v, p, n)
            // v = value
            // p = pointer to start of init code
            // n = size of init code
            addr := create(callvalue(), add(_code, 0x20), mload(_code))
        }
        require(addr != address(0), "Failed to deploy contract");

        emit Deployed(addr);
    }
}
}