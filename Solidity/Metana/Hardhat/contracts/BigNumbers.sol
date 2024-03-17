//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract BigNumbers {
    uint256 public number;

    function setNumber(uint256 newNumber) external {
        number = newNumber;
    }

    function setToTheMax() external {
        number = type(uint256).max;
    }

    function getNumber() external view returns (uint256) {
        return number;
    }
}
