// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract GolbalVariables {
    function globaVars() external view returns (address, uint, uint) {
        address sender = msg.sender; // sender of the message
        uint timestamp = block.timestamp; // current block timestamp
        uint blockNum = block.number; // current block number
        return (sender, timestamp, blockNum);
    }
}
