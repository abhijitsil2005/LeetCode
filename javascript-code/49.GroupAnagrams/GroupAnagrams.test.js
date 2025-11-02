const groupAnagrams = require('./GroupAnagrams');

describe('Group Anagrams', () => {
    test('should group anagrams correctly for normal input', () => {
        expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
            .toEqual(expect.arrayContaining([
                expect.arrayContaining(["eat","tea","ate"]),
                expect.arrayContaining(["tan","nat"]),
                expect.arrayContaining(["bat"])
            ]));
    });

    test('should handle empty string input', () => {
        expect(groupAnagrams([""])).toEqual([[""]]);
    });

    test('should handle single character input', () => {
        expect(groupAnagrams(["a"])).toEqual([["a"]]);
    });

    test('should handle all unique strings', () => {
        expect(groupAnagrams(["cat", "dog", "bird"]))
            .toEqual([["cat"], ["dog"], ["bird"]]);
    });

    test('should handle strings with same characters but different lengths', () => {
        expect(groupAnagrams(["aa", "a"]))
            .toEqual([["aa"], ["a"]]);
    });

    test('should handle strings with special characters', () => {
        expect(groupAnagrams(["!ab!", "!ba!", "abc"]))
            .toEqual(expect.arrayContaining([
                expect.arrayContaining(["!ab!", "!ba!"]),
                ["abc"]
            ]));
    });
});