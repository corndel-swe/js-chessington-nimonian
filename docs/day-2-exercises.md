# Day 2 Exercises

In these exercises, we'll be implementing some maths and geometry functionality
using classes.

## Exercise 1: Static methods and properties

Let's make our own set of utility methods and properties, called `Maths`. A
skeleton file and class is provided in `exercises/maths.js`

Read the docs about
[static methods and properties](https://tech-docs.corndel.com/js/static-properties.html).

To run the tests for this exercise, run `npm run test:d2e1` in your terminal.

- [ ] Add a static property `PI` to `Maths`. The value of `Maths.PI` should be
      `3.14`.

- [ ] Add the static method `Maths.max(a, b)`, which returns the largest of `a`
      and `b`.

## Exercise 2: Inheritance

To continue on with our theme with maths, we've written a `Rectangle` and a
`Square` class inside `exercises/rectangles.js`.

If you have a quick look through the file, you'll spot that the `Rectangle` and
`Square` classes look (and are conceptually) _very_ similar - a sign that we can
do some refactoring.

Let's start off by reading the documentation on
[Inheritance](https://tech-docs.corndel.com/js/inheritance.html)

Since a `Square` is a special type of `Rectangle`, let's make `Square` _inherit
from_ `Rectangle`.

- [ ] Use the `extends` keyword in the class definition to make `Square` a
      subclass of `Rectangle`

- [ ] We also need to call `super` in the constructor of `Square` to call the
      constructor of `Rectangle` and set the `width` and `height` properties.

- [ ] Are there any functions we can remove from `Square` that are already
      defined in `Rectangle`?

- [ ] Do we need `#side` anymore if we're using `#width` and `#height`?

## Exercise 3: Method overriding

Sometimes, it's not as easy to figure out _one_ way to do something that works
for every subclass. Finding the area for a square and a rectangle may be similar
enough, but what about a triangle? Or a circle?

We have another set of shape classes in `exercises/shapes.js`, and a base class
`Shape` that has placeholder methods `area` and `perimeter`.

Read the documentation on
[Method overriding](https://tech-docs.corndel.com/js/method-overriding.html)

To run the tests for this exercise, run `npm run test:d2e3` in your terminal.

- [ ] Make all the shape classes inherit from `Shape`.

- [ ] Override the `getArea` and `getPerimeter` methods in each subclass to
      return the correct values for that shape.
