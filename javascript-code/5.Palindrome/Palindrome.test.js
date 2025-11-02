const longestPalindrome = require('./Palindrome');

describe('longestPalindrome', () => {
    test('should return "bab" or "aba" for input "babad"', () => {
        const result = longestPalindrome("babad");
        expect(["bab", "aba"]).toContain(result);
    });

    test('should return "bb" for input "cbbd"', () => {
        expect(longestPalindrome("cbbd")).toBe("bb");
    });

    test('should return "a" for single character input', () => {
        expect(longestPalindrome("a")).toBe("a");
    });

    test('should return single character for non-palindrome input of length 2', () => {
        const result = longestPalindrome("ac");
        expect(["a", "c"]).toContain(result);
    });

    test('should handle empty string', () => {
        expect(longestPalindrome("")).toBe("");
    });

    test('should find palindrome in middle of string', () => {
        expect(longestPalindrome("xabay")).toBe("aba");
    });

    test('should handle all same characters', () => {
        expect(longestPalindrome("aaa")).toBe("aaa");
    });

    test('should find longer even-length palindrome', () => {
        expect(longestPalindrome("abccba")).toBe("abccba");
    });
});