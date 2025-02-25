import { strict as assert } from 'assert';
import { Rectangle } from '../exercises/rectangles.js';

describe('Rectangle', function() {
    it('should return the correct area', function() {
        // Arrange
        const width = 5;
        const height = 10;
        const rectangle = new Rectangle(width, height);

        // Act
        const result = rectangle.area();

        // Assert
        const expected = width * height;
        assert.strictEqual(result, expected);
    });

    it('should return the correct perimeter', function() {
        // Arrange
        const width = 5;
        const height = 10;
        const rectangle = new Rectangle(width, height);

        // Act
        const result = rectangle.perimeter();

        // Assert
        const expected = 2 * (width + height);
        assert.strictEqual(result, expected);
    });
});