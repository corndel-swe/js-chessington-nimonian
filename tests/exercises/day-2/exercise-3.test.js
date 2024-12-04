import {
  Shape,
  Rectangle,
  RightTriangle,
  Circle
} from '../../../exercises/shapes.js'
import { strict as assert } from 'assert'

describe('Rectangle', () => {
  it('should be a subclass of Shape', () => {
    assert(
      Rectangle.prototype instanceof Shape,
      'Rectangle is not a subclass of Shape'
    )
  })

  describe('area', () => {
    it('should return the area of the rectangle', () => {
      const rectangle = new Rectangle(4, 5)
      assert.equal(
        rectangle.area(),
        20,
        'The area of the rectangle is incorrect'
      )
    })
  })

  describe('perimeter', () => {
    it('should return the perimeter of the rectangle', () => {
      const rectangle = new Rectangle(4, 5)
      assert.equal(
        rectangle.perimeter(),
        18,
        'The perimeter of the rectangle is incorrect'
      )
    })
  })
})

describe('RightTriangle', () => {
  it('should be a subclass of Shape', () => {
    assert(
      RightTriangle.prototype instanceof Shape,
      'RightTriangle is not a subclass of Shape'
    )
  })

  describe('area', () => {
    it('should return the area of the triangle', () => {
      const triangle = new RightTriangle(3, 4)
      assert.equal(triangle.area(), 6, 'The area of the triangle is incorrect')
    })
  })

  describe('perimeter', () => {
    it('should return the perimeter of the triangle', () => {
      const triangle = new RightTriangle(3, 4)
      assert.equal(
        triangle.perimeter(),
        12,
        'The perimeter of the triangle is incorrect'
      )
    })
  })
})

describe('Circle', () => {
  it('should be a subclass of Shape', () => {
    assert(
      Circle.prototype instanceof Shape,
      'Circle is not a subclass of Shape'
    )
  })

  describe('area', () => {
    it('should return the area of the circle', () => {
      const circle = new Circle(5)
      assert(
        Math.abs(circle.area() - 78.54) < 0.1,
        'The area of the circle is incorrect'
      )
    })
  })

  describe('perimeter', () => {
    it('should return the perimeter of the circle', () => {
      const circle = new Circle(5)
      assert(
        Math.abs(circle.perimeter() - 31.42) < 0.1,
        'The perimeter of the circle is incorrect'
      )
    })
  })
})
