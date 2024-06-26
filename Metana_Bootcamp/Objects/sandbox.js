// Objects in JavaScript

// object literals

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [{ title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }],
//     login: function () { // method
//         console.log('the user logged in');
//     },
//     logout() { // method. another way to write a method, do not need to use the function keyword
//         console.log('the user logged out');
//     },
//     logBlogs() {
//         this.blogs.forEach(blog => {
//             console.log(`The user has written ${blog.title} blog with ${blog.likes} likes!`);
//         });
//     }
// };

// // console.log(user);
// // console.log(user.name);

// // user.age = 35; // change the value of age
// // console.log(user.age);

// // console.log(user['name']); // another way to access the value of name
// // user['name'] = 'chun-li'; // change the value of name

// // console.log(typeof user); // object

// user.login(); // the user logged in
// user.logout(); // the user logged out
// user.logBlogs(); // this user has written the following blogs: why mac & cheese rules 10 things to make with marmite

// math object

// console.log(Math);
// console.log(Math.PI);

// const area = 7.7;

// console.log(Math.round(area)); // 8
// console.log(Math.floor(area)); // 7
// console.log(Math.ceil(area)); // 8
// console.log(Math.trunc(area)); // 7 (remove the decimal part)

// // random numbers
// const random = Math.random(); // random number between 0 and 1
// console.log(random);
// console.log(Math.round(random * 100)); // random number between 0 and 100
