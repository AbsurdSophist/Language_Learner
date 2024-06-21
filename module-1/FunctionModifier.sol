// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract FunctionModifier {
    bool public paused;
    bool public count;

    function setPause(bool _paused) external {
        paused = _paused;
    }

    modifier whenNotPaused() {
        require(!paused, "Contract is paused");
        _;
    }

    modifier cap(uint _x) {
        require(_x < 10, "Value is greater than 10");
        _;
    }

    function setCount(bool _count) external whenNotPaused cap(_x) {
        count = _count;
    }
}
