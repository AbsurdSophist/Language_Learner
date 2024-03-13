// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Array {
    // Declaring and initializing arrays
    uint[] public nums; // dynamic array
    uint[3] public fixedNums; // fixed-size array
    nums = [1, 2, 3]; // initialize dynamic array
    fixedNums = [4, 5, 6]; // initialize fixed-size array

    // Operations on arrays
    function examples() external {
        nums.push(num); // push a number to the dynamic array
        unit x = nums[1]; // access and initialize an element in the dynamic array
        nums[1] = 8; // modify an element in the dynamic array
        delete nums[1]; // delete an element in the dynamic array. The element is reset to the default value of the type (0 in this case)
        nums.pop(); // remove the last element in the dynamic array
        nums.length; // get the length of the dynamic array

        // create an array in memory
        uint[] memory memoryArray = new uint[](3);
    }

    function returnArray() external view returns(uint[] memory) {
        return nums;
    } // not suggested to return dynamic arrays from functions because gas expenses

}
