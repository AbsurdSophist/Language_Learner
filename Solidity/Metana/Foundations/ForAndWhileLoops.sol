// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ForAndWhileLoops {
    function loops() external pure {
        for (uint i = 0; i < 10; i++) {
            // Do something
            if (i == 5) {
                continue; // Skip the rest of the loop
            }
            if (i == 8) {
                break; // Exit the loop
            }
        }

        uint j = 0;
        while (j < 10) {
            // Do something
            j++;
        }
    }

    function sum(uint _n) external pure returns (uint) {
        uint s;
        for (uint i = 1; i <= _n; i++) {
            s += i;
        }
        return s;
    }
}
