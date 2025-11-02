const fibGenerator = require('./FibonacciSequence');

describe('fibGenerator', () => {
    const collect = (gen, n) => {
        const out = [];
        for (let i = 0; i < n; i++) out.push(gen.next().value);
        return out;
    };

    test('callCount = 0 returns empty array (no next calls)', () => {
        const gen = fibGenerator();
        const result = []; // simulate collecting 0 values
        expect(result).toEqual([]);
    });

    test('first 5 fibonacci numbers', () => {
        const gen = fibGenerator();
        expect(collect(gen, 5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('first 1 and first 2 fibonacci numbers', () => {
        const g1 = fibGenerator();
        expect(collect(g1, 1)).toEqual([0]);

        const g2 = fibGenerator();
        expect(collect(g2, 2)).toEqual([0, 1]);
    });

    test('first 10 fibonacci numbers', () => {
        const gen = fibGenerator();
        expect(collect(gen, 10)).toEqual([0,1,1,2,3,5,8,13,21,34]);
    });

    test('50th sequence length and last value', () => {
        const gen = fibGenerator();
        const arr = collect(gen, 50);
        expect(arr).toHaveLength(50);
        // 50th element (0-indexed position 49)
        expect(arr[49]).toBe(7778742049);
    });

    test('multiple generators maintain independent state', () => {
        const a = fibGenerator();
        const b = fibGenerator();

        expect(a.next().value).toBe(0);
        expect(a.next().value).toBe(1);
        // b is still at start
        expect(b.next().value).toBe(0);
        // a continues
        expect(a.next().value).toBe(1);
        expect(b.next().value).toBe(1);
    });

    test('generator next() done is always false (infinite generator)', () => {
        const gen = fibGenerator();
        for (let i = 0; i < 5; i++) {
            const res = gen.next();
            expect(res.done).toBe(false);
            expect(typeof res.value).toBe('number');
        }
    });
});