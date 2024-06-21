// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ArrayReplaceLast {
    uint[] public arr = [1, 2, 3];

    function replaceLast(uint _value) public {
        require(arr.length > 0, "Array is empty");

        arr[_value] = arr[arr.length - 1]; // Replace the last element
        arr.pop(); // gas efficient, but does not preserve order
    }
}
