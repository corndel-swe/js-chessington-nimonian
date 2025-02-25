import { strict as assert } from 'assert'
import Board from '../../src/models/board.js'
import Pawn from '../../src/models/pieces/pawn.js'
import Player from '../../src/models/player.js'
import Square from '../../src/models/square.js'

describe('Board', () => {
  describe('pawns', () => {
    let board
    beforeEach(() => {
      // Common code executed before each test.
      board = new Board()
    })

    it('can be added to the board', () => {
      // Arrange
      const pawn = new Pawn(Player.WHITE)
      const square = new Square(0, 0)

      // Act
      board.setPiece(square, pawn)

      // Assert
      assert.equal(board.getPiece(square), pawn) // Object equality: same object reference
    })

    it('can be found on the board', () => {
      // Arrange
      const pawn = new Pawn(Player.WHITE)
      const square = new Square(6, 4)

      // Act
      board.setPiece(square, pawn)

      // Assert
      // board.findPiece(pawn).should.eql(square)
      assert.deepEqual(board.findPiece(pawn), square) // Object equivalence: different objects, same data
    })
  })
})
