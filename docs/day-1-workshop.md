# Day 1 Workshop

> [!NOTE]
>
> Be sure to read `CONTRIBUTING.md` before getting started on the workshops.

Take a look at the `getAvailableMoves` method in the `Pawn` class. This function
has been partially implemented, so they can take one step forward.

For the other pieces, `getAvailableMoves` method has not been implemented at
all.

This workshop is all about getting this method working as much as possible for
all classes.

> [!TIP]
>
> There are a _lot_ of movement rules in chess. Don't get overwhelmed - the
> point is to implement what you can in the time allowed and see how far we get.

## First steps

- [ ] Run

      ```bash
      npm run test
      ```

      This will run tests for all the pieces.

- [ ] Read the output to get a sense of the specification. You will notice that
      some tests are "pending". To begin with, we will only focus on the tests
      which are not pending.

- [ ] Choose a piece, and work on its `getAvailableMoves` method to make its
      tests pass.

- [ ] Move onto a new piece, and keep going until all non-pending tests are
      passing.

## Moving on

If you take a look at the some of the `.spec.js` files under the
`tests/models/pieces/` directory, you'll see that there are some tests that are
currently being skipped (they have `xit` instead of `it`).

- [ ] Choose a piece and pick the first `xit` to un-skip. You can do this by
      deleting the `x` and leaving the `it`. Un-skip both the white version of
      the test and the black version of the test.

- [ ] Run the tests again, you should see a pair of failing tests!

- [ ] Now that you have some failing tests, once again, try to write some code
      to make them pass!

- [ ] When you make them pass, pick another piece and/or another test to un-skip
      and repeat the process again!
