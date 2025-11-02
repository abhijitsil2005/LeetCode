const countPowersOfTwo = require('./2SquareCount');

// Utility function to generate test arrays of different sizes
function generateTestArray(size) {
    return Array.from({ length: size }, (_, i) => i + 1);
}

// Function to measure execution time
function measureExecutionTime(fn, input) {
    const start = process.hrtime.bigint();
    fn(input);
    const end = process.hrtime.bigint();
    return Number(end - start) / 1_000_000; // Convert to milliseconds
}

// Test cases with different input sizes
const testSizes = [100, 1000, 10000, 100000, 1000000];

console.log('Benchmarking countPowersOfTwo function:');
console.log('-------------------------------------');
console.log('Input Size | Execution Time (ms)');
console.log('-------------------------------------');

testSizes.forEach(size => {
    const testArray = generateTestArray(size);
    const executionTime = measureExecutionTime(countPowersOfTwo, testArray);
    console.log(`${size.toString().padEnd(10)} | ${executionTime.toFixed(4)}`);
});

// Worst case scenario (all numbers need full check)
console.log('\nWorst Case Scenario (all numbers need checking):');
console.log('-------------------------------------');

const worstCaseSize = 10000;
const worstCaseArray = Array(worstCaseSize).fill(3); // Non-power of 2
const worstCaseTime = measureExecutionTime(countPowersOfTwo, worstCaseArray);
console.log(`${worstCaseSize} elements (all non-powers of 2): ${worstCaseTime.toFixed(4)} ms`);

// Best case scenario (all powers of 2)
const bestCaseArray = Array.from({ length: worstCaseSize }, (_, i) => Math.pow(2, i % 20)); // Using modulo to keep numbers reasonable
const bestCaseTime = measureExecutionTime(countPowersOfTwo, bestCaseArray);
console.log(`${worstCaseSize} elements (all powers of 2): ${bestCaseTime.toFixed(4)} ms`);