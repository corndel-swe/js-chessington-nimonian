# Day 1 Exercises

Let's start off making a simple counter. A counter is quite a good use case for
classes since it requires state (the current count) a way to read that state
(getting the current count), and methods to change that state (increment and
reset).

## Exercise 1: Classes and Instances

First, have a read of
[Classes and Instances](https://tech-docs.corndel.com/js/classes-and-instances.html).

To run the tests for this exercise, run `npm run test:d1e1` in your terminal.

Your instructions are to:

- [ ] Open up `exercises/counter.js` and create a new class called `Counter`.

> [!NOTE]
>
> Make sure your class name has a capital `C`

- [ ] Give it a constructor that initialises `count` to `0`

- [ ] Assign the variable `counterInstance` below to an instance of your counter
      class.

## Exercise 2: Instance methods

Now, have a look through
[Instance methods](https://tech-docs.corndel.com/js/instance-methods).

You can run the tests for this exercise using `npm run test:d1e2`.

We'll want to be able to increment the counter, reset our counter, and get the
current count.

Have a go implementing the following methods:

- [ ] `increment()`, which adds one to `count`

- [ ] `reset()`, which sets `count` to `0`

- [ ] `getCount()`, which returns the current `count`

## Exercise 3: Private properties

Finally, read about
[Private properties](https://tech-docs.corndel.com/js/private-properties).

You can run the tests for this exercise using `npm run test:d1e3`.

- [ ] Refactor the `count` property to be private, so that it's hidden from
      outside the class.

## Extensions

Modify the constructor so that it can accept an _optional_ argument as the
initial count.
