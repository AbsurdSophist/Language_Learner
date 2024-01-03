/* Challenge: Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. 
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0. */

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m; // return 0 if n or m is less than 0, else return n * m
}


// Unit Tests
describe('paperwork', () => {
    it('returns 0 if n or m is less than 0', () => {
        expect(paperwork(-1, 5)).toBe(0);
        expect(paperwork(5, -1)).toBe(0);
        expect(paperwork(-1, -1)).toBe(0);
    });

    it('returns n * m if both n and m are greater than or equal to 0', () => {
        expect(paperwork(0, 0)).toBe(0);
        expect(paperwork(5, 5)).toBe(25);
        expect(paperwork(2, 3)).toBe(6);
    });
}); 