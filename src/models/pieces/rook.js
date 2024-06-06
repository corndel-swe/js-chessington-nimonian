import Square from '../square.js'
import Piece from './piece.js'

class Rook extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    const moves = []

    const dirs = [
      { dr: 1, dc: 0 },
      { dr: -1, dc: 0 },
      { dr: 0, dc: 1 },
      { dr: 0, dc: -1 }
    ]

    for (let { dr, dc } of dirs) {
      let candidate = new Square(loc.row + dr, loc.col + dc)
      while (board.contains(candidate)) {
        moves.push(candidate)
        candidate = new Square(candidate.row + dr, candidate.col + dc)
      }
    }

    return moves
  }
}

export default Rook
