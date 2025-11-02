const firstMissingPositive = require('./FirstMissingPositive');

describe('First Missing Positive', () => {
    test('should return 3 for [1,2,0]', () => {
        expect(firstMissingPositive([1,2,0])).toBe(3);
    });

    test('should return 2 for [3,4,-1,1]', () => {
        expect(firstMissingPositive([3,4,-1,1])).toBe(2);
    });

    test('should return 1 for [7,8,9,11,12]', () => {
        expect(firstMissingPositive([7,8,9,11,12])).toBe(1);
    });

    test('should return 1 for empty array', () => {
        expect(firstMissingPositive([])).toBe(1);
    });

    test('should return 2 for [1]', () => {
        expect(firstMissingPositive([1])).toBe(2);
    });

    test('should return 1 for array with all negative numbers', () => {
        expect(firstMissingPositive([-1,-2,-3])).toBe(1);
    });

    test('should return 3 for array with duplicate numbers', () => {
        expect(firstMissingPositive([1,1,2,2])).toBe(3);
    });

    test('should return 2 for array with zeros', () => {
        expect(firstMissingPositive([0,0,0,1])).toBe(2);
    });
});