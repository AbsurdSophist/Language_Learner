// Code: Async JS

let stocks = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    container: ['cone', 'cup', 'stick'],
    toppings: ['chocolate chips', 'peanuts']
};

// // Async Await
let is_shop_open = true;

let time = (ms) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log('Shop is closed'));
        }
    });
};

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected`);

        await time(0000);
        console.log('Production has started.');

        await time(2000);
        console.log('The fruit has been chopped.');

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`);

        await time(1000);
        console.log('The machine was started.');

        await time(2000);
        console.log(`The ice cream was placed in a ${stocks.container[0]}.`);

        await time(3000);
        console.log(`The ${stocks.toppings[0]} were added.`);

        await time(2000);
        console.log('The ice cream was served.');
    }
    catch (error) {
        console.log('Customer left', error);
    }
    finally {
        console.log('Day ended, shop is closed.');
    }
}

kitchen();

// // Promise
// let is_shop_open = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time);
//         } else {
//             reject(console.log('Our shop is closed'));
//         }
//     });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

//     .then(() => {
//         return order(0000, () =>
//             console.log('Production has started.'));
//     })

//     .then(() => {
//         return order(2000, () =>
//             console.log('The fruit has been chopped.'));
//     })

//     .then(() => {
//         return order(1000, () =>
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`));
//     })

//     .then(() => {
//         return order(1000, () =>
//             console.log('The machine was started.'));
//     })

//     .then(() => {
//         return order(2000, () =>
//             console.log(`The ice cream was placed in a ${stocks.container[0]}.`));
//     })

//     .then(() => {
//         return order(3000, () =>
//             console.log(`The ${stocks.toppings[0]} were added.`));
//     })

//     .then(() => {
//         return order(2000, () =>
//             console.log('The ice cream was served.'));
//     })

//     .catch(() => console.log('Customer left.'))

//     .finally(() => console.log('Day ended, shop is closed.'));



//  // Callback Hell
// let order = (fruit_name, container_type, toppings_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.fruits[fruit_name]} was selected`);
//         call_production(container_type, toppings_name);
//     }, 2000);
// };

// let production = (container_type, toppings_name) => {
//     setTimeout(() => {
//         console.log('Order received, starting production.');

//         setTimeout(() => {
//             console.log("The fruit has been chopped.");

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

//                 setTimeout(() => {
//                     console.log('The machine was started.');

//                     setTimeout(() => {
//                         console.log(`The ice cream was placed in a ${stocks.container[container_type]}.`);

//                         setTimeout(() => {
//                             console.log(`The ${stocks.toppings[toppings_name]} were added.`);

//                             setTimeout(() => {
//                                 console.log('The ice cream was served.');
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 0000);
// };

// order(3, 2, 0, production); // Order placed. Please call production. Order received, starting production. 