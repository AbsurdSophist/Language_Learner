// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ViewAndPureFunc {
    uint public myUint = 123;

    function foo() external view returns (uint) {
        return myUint; // read-only function, cannot modify state variables, on blockchain
    }

    function bar(_getnum) external pure returns (uint) {
        return _getnum; // function that does not read or modify state variables (not reading or writing to the blockchain)
    }
}
