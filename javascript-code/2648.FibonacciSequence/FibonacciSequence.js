/* 2648. Fibonacci Sequence
 Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted

Constraints:

0 <= callCount <= 50
 */
/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    // Initialize values as BigInt
    let prev = BigInt(0);
    let curr = BigInt(1);
    
    while (true) {
        // Yield current number, converting back to Number if it's safe
        const value = prev <= Number.MAX_SAFE_INTEGER ? Number(prev) : prev;
        yield value;
        
        // Calculate next Fibonacci number using BigInt arithmetic
        [prev, curr] = [curr, prev + curr];
    }
};

/** 
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
module.exports = fibGenerator;

// Example usage:
/*
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
*/