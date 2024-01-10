// SPDX-License-Identifier: BSD-2-Clause

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

pragma solidity ^0.8.16;

contract Kata {
    function past(int h, int m, int s) public pure returns (int) {
        // hours to milliseconds
        int hoursToMilliseconds = h * 3600 * 1000;
        // minutes to milliseconds
        int minutesToMilliseconds = m * 60 * 1000;
        // second to milliseconds
        int secondsToMilliseconds = s * 1000;
        // total milliseconds
        int totalMilliseconds = hoursToMilliseconds +
            minutesToMilliseconds +
            secondsToMilliseconds;

        return totalMilliseconds;
    }
}
