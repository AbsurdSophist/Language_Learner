// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract IfElse {
    function foo(uint _x) public pure returns (uint) {
        if (_x < 10) {
            return 0;
        } else {
            return 1;
        }
    }

    function ternary(uint _x) public pure returns (uint) {
        return _x < 10 ? 0 : 1;
    }
}
