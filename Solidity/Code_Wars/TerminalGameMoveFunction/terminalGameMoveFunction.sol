// SPDX-License-Identifier: BSD-2-Clause

/* In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position. */

pragma solidity ^0.8.16;

contract Kata {
    function move(int p, int r) public pure returns (int) {
        return p + (r + r); //adding costs less than multiplying
    }
}
