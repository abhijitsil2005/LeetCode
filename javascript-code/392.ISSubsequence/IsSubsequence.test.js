const isSubsequence = require('./IsSubsequence');

describe('isSubsequence', () => {
    test('should return true when s is a subsequence of t', () => {
        expect(isSubsequence("abc", "ahbgdc")).toBe(true);
    });

    test('should return false when s is not a subsequence of t', () => {
        expect(isSubsequence("axc", "ahbgdc")).toBe(false);
    });

    test('should return true when s is empty string', () => {
        expect(isSubsequence("", "ahbgdc")).toBe(true);
    });

    test('should return false when s is longer than t', () => {
        expect(isSubsequence("abcd", "abc")).toBe(false);
    });

    test('should return true for identical strings', () => {
        expect(isSubsequence("abc", "abc")).toBe(true);
    });
});