const findMedianSortedArrays = require('./MedeianOfSortedArray');

describe('findMedianSortedArrays', () => {
    test('returns correct median for arrays with odd total length', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
        expect(findMedianSortedArrays([1], [2, 3])).toBe(2);
        expect(findMedianSortedArrays([], [1, 2, 3])).toBe(2);
    });

    test('returns correct median for arrays with even total length', () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
        expect(findMedianSortedArrays([1, 4], [2, 3])).toBe(2.5);
        expect(findMedianSortedArrays([], [1, 2, 3, 4])).toBe(2.5);
    });

    test('handles empty arrays correctly', () => {
        expect(findMedianSortedArrays([], [1])).toBe(1);
        expect(findMedianSortedArrays([1], [])).toBe(1);
        expect(findMedianSortedArrays([], [])).toBe(undefined);
    });

    test('handles arrays with negative numbers', () => {
        expect(findMedianSortedArrays([-2, -1], [3, 4])).toBe(1);
        expect(findMedianSortedArrays([-1], [-2, 3])).toBe(-1);
    });

    test('handles arrays with duplicate numbers', () => {
        expect(findMedianSortedArrays([1, 1], [1, 1])).toBe(1);
        expect(findMedianSortedArrays([2, 2], [2, 3])).toBe(2);
    });
});