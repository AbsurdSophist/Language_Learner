/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
    return s.replace(/!/g, ''); // replace all instances of '!' with ''
}

// Unit tests
describe('removeExclamationMarks', () => {
    it('should remove all exclamation marks from the string', () => {
        // Test case 1
        let result = removeExclamationMarks('Hello World!');
        expect(result).toEqual('Hello World');

        // Test case 2
        result = removeExclamationMarks('This is a test!!');
        expect(result).toEqual('This is a test');

        // Test case 3
        result = removeExclamationMarks('No exclamation marks here');
        expect(result).toEqual('No exclamation marks here');
    });

    it('should return an empty string if the input is only exclamation marks', () => {
        // Test case 4
        let result = removeExclamationMarks('!!!!');
        expect(result).toEqual('');

        // Test case 5
        result = removeExclamationMarks('!!!!!!!!');
        expect(result).toEqual('');
    });

    it('should handle an empty string input', () => {
        // Test case 6
        let result = removeExclamationMarks('');
        expect(result).toEqual('');

        // Test case 7
        result = removeExclamationMarks('   ');
        expect(result).toEqual('   ');
    });
});