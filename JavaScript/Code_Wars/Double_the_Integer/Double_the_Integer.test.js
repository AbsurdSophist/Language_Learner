// Challenge: i will be an ingeter. Double it and return it.

function doubleInteger(i) {
    i = i * 2;
    return i;
}


// unit tests
describe('doubleInteger', () => {
    it('should double positive integers', () => {
        expect(doubleInteger(2)).toBe(4);
        expect(doubleInteger(3)).toBe(6);
    });

    it('should double negative integers', () => {
        expect(doubleInteger(-5)).toBe(-10);
    });

    it('should double zero', () => {
        expect(doubleInteger(0)).toBe(0);
    });
});