// Chalenge: You have to return which player won! In case of a draw return Draw!

const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
    return 'Player 2 won!';
};

describe('rock paper scissors game', () => {
    test('should return Draw! when both players choose the same', () => {
        expect(rps('rock', 'rock')).toBe('Draw!');
        expect(rps('paper', 'paper')).toBe('Draw!');
        expect(rps('scissors', 'scissors')).toBe('Draw!');
    });

    test('should return Player 1 won! when Player 1 wins', () => {
        expect(rps('rock', 'scissors')).toBe('Player 1 won!');
        expect(rps('scissors', 'paper')).toBe('Player 1 won!');
        expect(rps('paper', 'rock')).toBe('Player 1 won!');
    });

    test('should return Player 2 won! when Player 2 wins', () => {
        expect(rps('scissors', 'rock')).toBe('Player 2 won!');
        expect(rps('paper', 'scissors')).toBe('Player 2 won!');
        expect(rps('rock', 'paper')).toBe('Player 2 won!');
    });
});