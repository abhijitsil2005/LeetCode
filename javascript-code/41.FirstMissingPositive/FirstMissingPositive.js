/*41. First Missing Positive
Given an unsorted integer array nums, find the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses constant extra space.
Example 1: Input: nums = [1,2,0] Output: 3
Example 2: Input: nums = [3,4,-1,1] Output: 2
Example 3: Input: nums = [7,8,9,11,12] Output: 1
*/      
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    // Edge case: if array is empty, return 1
    if (n === 0) return 1;

    //for nums = [3,4,-1,1] n = 4

    // Step 1: Replace negative numbers and zeros with a number greater than n
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }
    // nums = [3,4,5,1] after this step for input [3,4,-1,1]

    // Step 2: Use the index as a hash to record the presence of numbers
    for (let i = 0; i < n; i++) {
        // Get the absolute value of the current number
        const num = Math.abs(nums[i]);
        // If num is in the range [1, n], mark its presence
        if (num <= n) {
            // Mark the presence of num by making the value at index num-1 negative
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    // when i=0: num=3 -> nums[2] = -|5| = -5 -> nums = [3,4,-5,1]
    // when i=1: num=4 -> nums[3] = -|1| = -1 -> nums = [3,4,-5,-1]
    // when i=2: num=5 (ignore as it's > n)
    // when i=3: num=1 -> nums[0] = -|3| = -3 -> nums = [-3,4,-5,-1]
    // nums = [-3,4,-5,-1] after this step for input [3,4,-1,1]

    // Step 3: Find the first index which has a positive number
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            // Return the first index with a positive number plus one
            return i + 1;
        }
    }

    // If all indices have negative numbers, return n + 1
    // This means all numbers from 1 to n are present
    return n + 1;
};

module.exports = firstMissingPositive;

// Example usage:
// console.log(firstMissingPositive([1,2,0])); // Output: 3
 console.log(firstMissingPositive([3,4,-1,1])); // Output: 2
// console.log(firstMissingPositive([7,8,9,11,12])); // Output: 1