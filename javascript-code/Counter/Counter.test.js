const createCounter = require('./Counter');

describe('Counter Tests', () => {
    test('should return incrementing values starting from input number', () => {
        const counter = createCounter(10);
        expect(counter()).toBe(10);
        expect(counter()).toBe(11); 
        expect(counter()).toBe(12);
    });

    test('should work with negative numbers', () => {
        const counter = createCounter(-5);
        expect(counter()).toBe(-5);
        expect(counter()).toBe(-4);
        expect(counter()).toBe(-3);
    });

    test('should work with zero', () => {
        const counter = createCounter(0);
        expect(counter()).toBe(0);
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
    });

    test('multiple counter instances should be independent', () => {
        const counter1 = createCounter(1);
        const counter2 = createCounter(10);
        
        expect(counter1()).toBe(1);
        expect(counter2()).toBe(10);
        expect(counter1()).toBe(2);
        expect(counter2()).toBe(11);
    });
});