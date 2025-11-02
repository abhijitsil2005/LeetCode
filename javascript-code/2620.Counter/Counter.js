/* 2620. Create a Counter (Easy)

Write a function createCounter. This function should accept an initial integer init and return another function. 
The returned function, when called, should return the next integer starting from init and incrementing by 1 each time it is called.

Example 1:

Input:
["Counter","call","call","call"]
[[10],[],[],[]]
Output:
[null,10,11,12]
Explanation:
const counter = createCounter(10);
counter(); // return 10
counter(); // return 11
counter(); // return 12
Example 2:

Input:
["Counter","call","call","call"]
[[-2],[],[],[]]
Output:
[null,-2,-1,0]
Explanation:
const counter = createCounter(-2);
counter(); // return -2
counter(); // return -1
counter(); // return 0
 

Constraints:

-1000 <= init <= 1000
At most 1000 calls will be made to the counter function. */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    console.log("n is:", n)
    return function() {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
module.exports = createCounter;

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12