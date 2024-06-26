// // Ternary Operators
// let age = 16;
// let name = age > 18 ? 'Sarah' : 'Joe';

// const Component = () => {
//     return (
//         <div>
//             {age > 18 ? <p>you are over 18</p> : <p>you are under 18</p>}
//         </div>
//     );
// }

// // Destructuring
// const person = {
//     name: "Lucas",
//     age: 31,
//     isMarried = false,
// };

// const { name, age, isMarried } = person;

// Mapping
let names = ['Lucas', 'Sarah', 'Joe'];

names.map(name => {
    return <h1>{name}</h1>
})

console.log(names);

// Filter
// let names = ['Lucas', 'Sarah', 'Joe'];
