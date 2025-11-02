/*238. Product of Array Except Self
 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
 
Example 1: Input: nums = [1,2,3,4] Output: [24,12,8,6]
Example 2: Input: nums = [-1,1,0,-3,3] Output: [0,0,9,0,0]      
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Helper function to normalize zero values
// This ensures that -0 is converted to 0
function normalizeZero(n) {
    return Object.is(n, -0) ? 0 : n;
}

var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    // Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = normalizeZero(leftProduct);
        leftProduct *= nums[i];
    }
    // i=0: answer[0] = 1, leftProduct = 1 * 1 = 1
    // i=1: answer[1] = 1, leftProduct = 1 * 2 = 2
    // i=2: answer[2] = 2, leftProduct = 2 * 3 = 6
    // i=3: answer[3] = 6, leftProduct = 6 * 4 = 24
    // [1, 1, 2, 6] after this loop for input [1,2,3,4]
    
    // Calculate right products and multiply with left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = normalizeZero(answer[i] * rightProduct);
        rightProduct *= nums[i];
    }
    // i=3: answer[3] = 6 * 1 = 6, rightProduct = 1 * 4 = 4
    // i=2: answer[2] = 2 * 4 = 8, rightProduct = 3 * 4 = 12
    // i=1: answer[1] = 1 * 12 = 12, rightProduct = 2 * 12 = 24
    // i=0: answer[0] = 1 * 24 = 24, rightProduct = 24 * 1 = 24    
    // [24, 12, 8, 6] after this loop for input [1,2,3,4]
    
    return answer;
};

module.exports = productExceptSelf;

// Example usage:
// console.log(productExceptSelf([1,2,3,4])); // Output: [24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3])); // Output: [0,0,9,0,0]