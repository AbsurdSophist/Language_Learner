// Functions in JavaScript

// // Function declaration (hoisted)
// function greet() {
//     console.log('Hello there!');
// }

// // Function expression (not hoisted)
// const speak = function () {
//     console.log('Good day!');
// }; // semicolon is required here

// greet();
// speak(); 

// // Arguments & parameters

// const speak = function (name = 'Luigi', time = 'night') { // name is a parameter (passing a value to a function)
//     console.log(`Good ${time} ${name}!`)
// };

// speak('Mario', 'morning'); // Mario and morning are arguments (declaring a value to a function)
// speak(); // default values are used

// // Returning values
// const calcArea = function (radius) {
//     let area = 3.14 * radius ** 2;
//     return area;
// };

// const area = calcArea(5);
// console.log('area is:', area);

// const calcVol = function (area) {
//     let volume = area * 3;
//     return volume;
// }

// const volume = calcVol(area);
// console.log('volume is:', volume); 

// // Arrow functions
// const calcArea = (radius) => 3.14 * radius ** 2;
// const area = calcArea(5);

// console.log(area);

// const greet = () => 'Hello, world!';
// console.log(greet());

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + (products[i] * tax);
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));

// // Functions & methods
// const name = 'shaun';

// // functions
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// // callbacks & foreach

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];


// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach((person, index) => {
//     console.log(index, person);
// });

// people.forEach(logPerson);

// get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style = "color: purple">${person}</li>`;
})

console.log(html);
ul.innerHTML = html;