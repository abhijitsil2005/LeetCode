/* 169. Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:  Input: nums = [3,2,3] Output: 3
Example 2: Input: nums = [2,2,1,1,1,2,2] Output: 2

// Explanation - keep a dictionary (Map) object to keep track of all the elements in array and how many times they appeared
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countMap = new Map();
    const majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }

        if (countMap.get(num) > majorityCount) {
            return num;
        }
    }
};

module.exports = majorityElement;

// Example usage:
// console.log(majorityElement([3,2,3])); // Output: 3
// console.log(majorityElement([2,2,1,1,1,2,2])); // Output: 2