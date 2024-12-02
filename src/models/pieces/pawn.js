import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'
import King from './king.js'

class Pawn extends Piece {
  constructor(player) {
    super()
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {
      // white pawns cannot move at the top of the board
      if (location.row === 7) {
        return moves
      }

      // white pawns cannot move over another piece
      if (board.getPiece(new Square(location.row + 1, location.col))) {
        return moves
      }

      // white pawns can move "up" by one
      moves.push(new Square(location.row + 1, location.col))

      // white pawns can move two squares "up" on their first move
      if (location.row === 1 && !board.getPiece(new Square(3, location.col))) {
        moves.push(new Square(3, location.col))
      }

      // white pawns can take a piece diagonally
      const capturableLeft = board.getPiece(
        new Square(location.row + 1, location.col - 1)
      )

      if (
        capturableLeft &&
        capturableLeft.player === Player.BLACK &&
        !(capturableLeft instanceof King)
      ) {
        moves.push(new Square(location.row + 1, location.col - 1))
      }

      const capturableRight = board.getPiece(
        new Square(location.row + 1, location.col + 1)
      )

      if (
        capturableRight &&
        capturableRight.player === Player.BLACK &&
        !(capturableRight instanceof King)
      ) {
        moves.push(new Square(location.row + 1, location.col + 1))
      }

      return moves
    }

    if (this.player === Player.BLACK) {
      // black pawns cannot move at the bottom of the board
      if (location.row === 0) {
        return moves
      }

      // black pawns cannot move over another piece
      if (board.getPiece(new Square(location.row - 1, location.col))) {
        return moves
      }

      // black pawns can move "down" by one
      moves.push(new Square(location.row - 1, location.col))

      // black pawns can move two squares "down" on their first move
      if (location.row === 6 && !board.getPiece(new Square(4, location.col))) {
        moves.push(new Square(4, location.col))
      }

      // black pawns can take a piece diagonally
      const capturableLeft = board.getPiece(
        new Square(location.row - 1, location.col - 1)
      )

      if (
        capturableLeft &&
        capturableLeft.player === Player.WHITE &&
        !(capturableLeft instanceof King)
      ) {
        moves.push(new Square(location.row - 1, location.col - 1))
      }

      const capturableRight = board.getPiece(
        new Square(location.row - 1, location.col + 1)
      )

      if (
        capturableRight &&
        capturableRight.player === Player.WHITE &&
        !(capturableRight instanceof King)
      ) {
        moves.push(new Square(location.row - 1, location.col + 1))
      }
    }

    return moves
  }
}

export default Pawn
