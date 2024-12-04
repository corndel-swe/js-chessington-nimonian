# Contributing

You will find
[this article the rules of chess](https://en.wikipedia.org/wiki/Rules_of_chess)
on useful when working on Chessington.

In the `models` folder, you'll find the logic that powers the chess game. Here's
a guide to the models, telling you what they do and how they work.

## Board

When a board is created it initialises a 2-dimensional array of length 8. That
is, an array of 8 arrays, where each array inside has a length of 8.

These represent rows and columns.

So, to select the first row you can do `let row1 = board[0]` And to get the
second square of that row: `let square = row1[1]` Or, in shorthand:
`let square = board[0][1]`

`Board` then has the following methods to use:

- `setPiece(square, piece)` places the given piece on a square returns nothing.

- `getPiece(square)` returns the piece on a given square, if one is there.

- `findPiece(pieceToFind)` will return the square that the piece is on, if it is
  on the board.

- `movePiece(fromSquare, toSquare)` will move the piece on the fromSquare to the
  toSquare.

## Square

Squares have two properties: `row` and `col` representing their position on the
board.

Squares have the following methods:

- `equals(otherSquare)` returns `true` if the two squares have the same `row`
  and `col`, `false` otherwise.

- `toString()` which gives a convenient string for logging to the console.

## Pieces

When pieces are constructed, they are assigned a player, either `WHITE` or
`BLACK`.

Each piece should have two methods:

- `getAvailableMoves(board)`. This method must be given the current board (so
  that it can work out which moves are available) it returns an array of
  `Square`.

- `moveTo(board, square)`, which will move the piece to the given square on the
  board.
