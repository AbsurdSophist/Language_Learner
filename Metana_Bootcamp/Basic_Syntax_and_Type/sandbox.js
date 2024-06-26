// Basic Syntax and Types

// let age = 25;
// let year = 2019;

// // log things to console
// console.log(age, year);


// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// // strings
// console.log('hello, world');

// let email = 'absurdsophist@gmail.com';
// console.log(email);

// // string concatenation
// let firstName = 'Lucas'
// let lastName = 'Manning';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[fullName.length - 1]);

// // string length
// console.log(fullName.length);

// // common string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');

// let result = email.slice(0, 5);

// let result = email.substr(0, 10);

// let result = email.replace('m', 'w');

// console.log(result);

// let radius = 10;
// const pi = 3.14159;
// let result = radius % 3
// let result = pi * radius ** 2;

// console.log(result);

// let likes = 10;
// // likes = likes + 1;
// // likes++;
// // likes--;
// // likes += 10;
// // console.log(likes);

// let result = 'the blog has' + ' ' + likes + ' ' + 'likes';
// console.log(result);

// // template strings
// const title = 'Best Reads of 2019';
// const author = 'Mario';
// const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes.`  // backticks


// creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>By #{author}</p>
//   <span>This blog has ${likes} likes</span>`;

// console.log(html);

// Arrays
// let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods
// let result = ninjas.join(', ');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken'); //returns length of array, destructive method (changes original array)
// result = ninjas.pop(); //returns the popped element, destructive method (changes original array

// console.log(result);
// console.log(ninjas);

// null and undefined
// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

// // booleans and comparisons
// console.log(true, false, 'true', 'false');

// // methods can return booleans
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// // let result = email.includes('!'); // returns true
// let result = names.includes('luigi'); // returns true

// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name > 'crystal'); // compares the first letter of each string
// console.log(name > 'Shaun'); // compares the first letter of each string. Lowercase letters are greater than uppercase letters
// console.log(name > 'Crystal'); // compares the first letter of each string

let age = 25;

// loose comparison (different types can still be equal)
// console.log(age == 25); // returns true
// console.log(age == '25'); // returns true

// strict comparison (different types cannot be equal)
// console.log(age === 25); // returns true
// console.log(age === '25'); // returns false
// console.log(age !== 25); // returns false
// console.log(age !== '25'); // returns true

// type conversion
let score = '100'; // score is a string

// console.log(score + 1); // returns 1001 (concatenates the 1 to the string)
// console.log(Number(score) + 1); // returns 101 (converts the string to a number and adds 1)
// console.log(typeof score); // returns string

// let result = Number('hello'); // returns NaN (not a number)
// console.log(result);

// let result = String(50); // returns '50'
// console.log(result, typeof result);

// let result = Boolean(100); // returns true. 0, empty strings, null, undefined, NaN all return false
// let result = Boolean('0'); // returns true. empty strings, null, undefined, NaN all return false

console.log(result, typeof result);