// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract FunctionOutputs {
    function getMultipleValues() public pure returns (uint, bool, uint) {
        return (1, true, 2);
    }

    function destructuringAssignments()
        public
        pure
        returns (uint a, bool b, uint c)
    {
        (a, b, c) = getMultipleValues();
    }
}
