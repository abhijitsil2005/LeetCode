const isValid = require('./ValidParentheses');

describe('Valid Parentheses', () => {
    test('should return true for empty string', () => {
        expect(isValid('')).toBe(true);
    });

    test('should return true for simple valid parentheses', () => {
        expect(isValid('()')).toBe(true);
        expect(isValid('[]')).toBe(true);
        expect(isValid('{}')).toBe(true);
    });

    test('should return true for multiple valid parentheses', () => {
        expect(isValid('()[]{}')).toBe(true);
        expect(isValid('{[]}')).toBe(true);
        expect(isValid('([{}])')).toBe(true);
    });

    test('should return false for invalid parentheses', () => {
        expect(isValid('(')).toBe(false);
        expect(isValid(')')).toBe(false);
        expect(isValid('(]')).toBe(false);
        expect(isValid('([)]')).toBe(false);
    });

    test('should return false for mismatched parentheses', () => {
        expect(isValid('{[}]')).toBe(false);
        expect(isValid('((())')).toBe(false);
        expect(isValid(']{')).toBe(false);
    });

    test('should handle complex nested structures', () => {
        expect(isValid('({[]}){}')).toBe(true);
        expect(isValid('{[()]}')).toBe(true);
        expect(isValid('((()))')).toBe(true);
    });
});