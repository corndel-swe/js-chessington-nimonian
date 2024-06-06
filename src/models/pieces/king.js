import Square from '../square.js'
import Piece from './piece.js'

class King extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    const moves = []

    const dirs = [
      { dr: 1, dc: 0 },
      { dr: 0, dc: 1 },
      { dr: -1, dc: 0 },
      { dr: 0, dc: -1 },
      { dr: 1, dc: 1 },
      { dr: 1, dc: -1 },
      { dr: -1, dc: 1 },
      { dr: -1, dc: -1 }
    ]

    for (let { dr, dc } of dirs) {
      const candidate = new Square(loc.row + dr, loc.col + dc)
      if (board.contains(candidate)) {
        moves.push(candidate)
      }
    }

    return moves
  }
}

export default King
