const majorityElement = require('./MajorityElement');

describe('majorityElement', () => {
    test.each([
        [[3, 2, 3], 3],
        [[2, 2, 1, 1, 1, 2, 2], 2],
        [[7], 7],
        [[5, 5, 5, 5], 5],
        [[-1, -1, 2], -1],
        [[1, 1, 1, 2], 1],
        [[0, 0, 1], 0],
    ])('returns %p for input %j', (input, expected) => {
        expect(majorityElement(input)).toBe(expected);
    });

    test('handles large array with clear majority', () => {
        const majority = 42;
        const arr = Array(51).fill(majority).concat(Array.from({ length: 49 }, (_, i) => i));
        // length = 100, majority count = 51 > floor(100/2)=50
        expect(majorityElement(arr)).toBe(majority);
    });
});