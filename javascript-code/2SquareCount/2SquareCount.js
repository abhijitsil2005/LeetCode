/* Find the count of numbers which are power of 2 in an array
Given an array of integers, count how many numbers are powers of 2.

Example 1:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Output: 4
Explanation: The numbers that are powers of 2 are 1 (2^0), 2 (2^1), 4 (2^2), and 8 (2^3).

Example 2:
Input: [3, 5, 7, 9]
Output: 0
Explanation: There are no numbers in the array that are powers of 2.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countPowersOfTwo = function(arr) {
    let count = 0;

    for (let num of arr) {
        if (isPowerOfTwo(num)) {
            count++;
        }
    }

    return count;
};

/**
 * Helper function to check if a number is a power of two
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfTwo(num) {
    if (num < 1) return false;
    // A number is a power of two if it has exactly one bit set in its binary representation
    // This can be checked using the expression (num & (num - 1)) === 0
    // example: 4 in binary is 100, 3 is 011, 100 & 011 = 000
    // example: 5 in binary is 101, 4 is 100, 101 & 100 = 100
    // example: 8 in binary is 1000, 7 is 0111, 1000 & 0111 = 0000
    return (num & (num - 1)) === 0; // Bitwise AND trick
}

module.exports = countPowersOfTwo;

// Example usage:
// console.log(countPowersOfTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 4
// console.log(countPowersOfTwo([3, 5, 7, 9])); // Output: 0