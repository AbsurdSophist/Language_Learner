/* Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ). */

function countBy(x, n) {
    let z = [];

    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }

    return z;
}

// unit test
describe('countBy', () => {
    test('should return an array of the first n multiples of x', () => {
        expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
        expect(countBy(3, 4)).toEqual([3, 6, 9, 12]);
        expect(countBy(5, 3)).toEqual([5, 10, 15]);
    });
});
