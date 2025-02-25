import { strict as assert } from 'assert'
import { Maths } from '../exercises/maths.js';

describe('Maths', () => {
    it('should have PI defined and equal to 3.14', () => {
        assert.equal(typeof Maths.PI, 'number');
        assert.equal(Maths.PI, 3.14);
    });

    it('should return the largest of two numbers with max', () => {
        assert.equal(Maths.max(1, 2), 2);
        assert.equal(Maths.max(5, 3), 5);
        assert.equal(Maths.max(-1, -5), -1);
    });
});