// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ArrayShift {
    uint[] public arr = [1, 2, 3];

    function remove(uint _index) public {
        require(_index < arr.length, "Index out of bounds");

        for (uint i = _index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]; // Shift elements to the left
        }
        arr.pop(); // Remove the last element
    }
}
