// Control Flow

// for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops
// let i = 0;

// while (i < 5) {
//     console.log('in loop:', i);
//     i++;
// }

// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// do while loops
// let i = 3;

// do {
//     console.log('val of i is:', i);
//     i++;
// }
// while (i < 5); 

// if statements
// const age = 21;

// if (age > 20) {
//     console.log('you are over 20 years old'); // only displays in console if true
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 3) {
//     console.log("that's a lot of ninjas");
// }

// const password = 'p@ssword1234';

// if (password.length >= 12 && password.includes('@') && password.includes('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
//     console.log('that password is mighty strong');
// } else if (password.length >= 8 || password.includes('@')) {
//     console.log('that password is strong enough');
// } else {
//     console.log('password is not strong enough');
// }

// logical not (!)
// let user = false;

// if (!user) {
//     console.log('you are not a ninja');
// }

// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//     if (scores[i] === 0) {
//         continue;
//     }

//     console.log('your score:', scores[i]);

//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// switch statements
// const grade = 'A';

// switch (grade) {
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got a B!');
//         break;
//     case 'C':
//         console.log('You got a C!');
//         break;
//     case 'D':
//         console.log('You got a D!');
//         break;
//     case 'F':
//         cons ole.log('You got an F!');
//         break;
//     default:
//         console.log('not a valid grade');
// }

// // variables & block scope

// let age = 30;

// if (true) {
//     let age = 40;
//     console.log('inside code block:', age); // 40 (root scope)
//     if (true) {
//         let age = 50;
//         console.log('inside 2nd code block:', age); // 50 (root scope)
//     }
// }
// console.log('outside code block:', age); // 30 (global scope)