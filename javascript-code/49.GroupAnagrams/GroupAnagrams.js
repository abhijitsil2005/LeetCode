/*49. Group Anagrams   
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the string to create a key
        const key = str.split('').sort().join('');
        
        // If the key doesn't exist in the map, initialize it with an empty array
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        // Push the original string into the corresponding array
        map.get(key).push(str);
    }

    // Return the grouped anagrams as an array of arrays
    return Array.from(map.values());
};

module.exports = groupAnagrams;

// Example usage:
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// console.log(groupAnagrams([""])); // Output: [[""]]
// console.log(groupAnagrams(["a"])); // Output: [["a"]]