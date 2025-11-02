/* Find the median of two sorted arrays of size m and n respectively.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1, 3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1, 2], nums2 = [3, 4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = mergeSortedArrays(nums1, nums2);
    // const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = merged.length;

    // If both arrays are empty, return undefined
    if (n === 0) return undefined;

    if (n % 2 === 1) {  // Odd length
        return merged[Math.floor(n / 2)];
    } else {  // Even length
        const mid1 = merged[n / 2 - 1];
        const mid2 = merged[n / 2];
        return (mid1 + mid2) / 2;
    }
};

/**
 * Helper function to merge two sorted arrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    // Append remaining elements
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}       
module.exports = findMedianSortedArrays;

// Example usage:
// console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5