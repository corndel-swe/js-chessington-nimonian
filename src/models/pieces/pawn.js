import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

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
      // white pawns can move "up" by one
      moves.push(new Square(location.row + 1, location.col))

      if (location.row === 1) {
        moves.push(new Square(location.row + 2, location.col))
      }
    }

    if (this.player === Player.BLACK) {
      // black pawns can move "down" by one
      moves.push(new Square(location.row - 1, location.col))

      if (location.row === 6) {
        moves.push(new Square(location.row - 2, location.col))
      }
    }

    return moves
  }
}

export default Pawn
