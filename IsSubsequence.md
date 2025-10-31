392. Is Subsequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Typescript:
function isSubsequence(s: string, t: string): boolean {
    const S: number = s.length;
    const T: number = t.length;
    if(s==='') return true;
    if(S>T) return false;
    let j:number = 0;
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
