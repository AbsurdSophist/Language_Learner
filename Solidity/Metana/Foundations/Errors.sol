// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Error {
    function testRequire(uint _i) public pure {
        require(_i <= 10, "Input must be less than 10");
    }

    function testRevert(uint _i) public pure {
        if (_i > 10) {
            revert("Input must be less than or equal to 10");
        }
    }

    function testAssert(uint _i) public pure {
        assert(_i <= 10);
    }

    error MyError(address caller, uint _i);

    function testCustomError(uint _i) public pure {
        if (_i > 10) {
            revert MyError(msg.sender, _i);
        }
    }
}
