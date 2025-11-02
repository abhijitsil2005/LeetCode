/* 392. Is Subsequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the 
characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
0 <= s.length <= 100
0 <= t.length <= 10^4
s and t consist only of lowercase English letters. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
    const S = s.length;
    const T = t.length;
    if(s==='') return true;
    if(S>T) return false;
    let j = 0;
    for(let i=0; i<T;i++){
        if(t[i] === s[j]){
            if(j===(S-1)) { //means it's last element of small string s
                return true;
            }
            j++;
        }
    }
    return false;
};

module.exports = isSubsequence;

//console.log(isSubsequence("abc", "ahbgdc")); // true
//console.log(isSubsequence("axc", "ahbgdc")); // false
//console.log(isSubsequence("", "ahbgdc")); // true