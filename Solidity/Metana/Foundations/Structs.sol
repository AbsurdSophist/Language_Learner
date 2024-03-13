// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Structs {
    struct Car {
        string model;
        uint year;
        address owner;
    }

    Car public car; // This is a state variable
    Car[] public cars; // This is a state variable
    mapping(address => Car[]) public ownerOfCar; // This is a state variable

    function examples() external {
        Car memory car1 = Car("Toyota", 2015, msg.sender); // memory variable will be deleted after function execution
        Car memory car2 = Car("Honda", 2010, msg.sender);
        Car memory car3 = Car("Ford", 2020, msg.sender);

        cars.push(car1); // This is a state variable and will be stored on the blockchain
        cars.push(car2);
        cars.push(car3);
        
        Car storage _car = cars[0]; // storage variable will be stored on the blockchain
        _car.model = "BMW"; // This will change the model of the first car in the cars array
        cars[0].year = 1999; // This will change the year of the first car in the cars array
        delete _car.owner; // This will delete the owner of the first car in the cars array
}
