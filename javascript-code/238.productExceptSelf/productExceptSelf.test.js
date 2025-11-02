const productExceptSelf = require('./productExceptSelf');

describe('productExceptSelf', () => {
    test('should return correct products for array [1,2,3,4]', () => {
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    });

    test('should return correct products for array with zeros [-1,1,0,-3,3]', () => {
        expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
    });

    test('should handle array with single element', () => {
        expect(productExceptSelf([5])).toEqual([1]);
    });

    test('should handle array with two elements', () => {
        expect(productExceptSelf([2,3])).toEqual([3,2]);
    });

    test('should handle array with all zeros', () => {
        expect(productExceptSelf([0,0,0])).toEqual([0,0,0]);
    });

    test('should handle array with all ones', () => {
        expect(productExceptSelf([1,1,1,1])).toEqual([1,1,1,1]);
    });

    test('should handle array with negative numbers', () => {
        expect(productExceptSelf([-2,-3,-4])).toEqual([12,8,6]);
    });
});