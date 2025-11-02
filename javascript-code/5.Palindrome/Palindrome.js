/* Longest Palindromic Substring

Example 1: 
Input: s = "babad" Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:  Input: s = "cbbd" Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLength = 1;
    let start = 0;
    const len = s.length;

    for (let i = 0; i < len; i++) {
        const len1 = expandAroundCenter(s, i, i); // Odd length palindromes
        const len2 = expandAroundCenter(s, i, i + 1); // Even length palindromes
        const currMaxLen = Math.max(len1, len2);

        if (currMaxLen > maxLength) {
            maxLength = currMaxLen;
            start = i - Math.floor((currMaxLen - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}

/// Helper function to expand around center and find palindrome length
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1; // Length of the palindrome
}

module.exports = longestPalindrome;

console.log(longestPalindrome("babad")); // "bab" or "aba"
//console.log(longestPalindrome("cbbd")); // "bb"
//console.log(longestPalindrome("a")); // "a"
//console.log(longestPalindrome("ac")); // "a" or "c"   
