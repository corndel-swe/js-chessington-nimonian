import Square from '../square.js'
import Piece from './piece.js'

class Knight extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    const moves = []

    const dirs = [
      { dr: 2, dc: 1 },
      { dr: 2, dc: -1 },
      { dr: -2, dc: 1 },
      { dr: -2, dc: -1 },
      { dr: 1, dc: 2 },
      { dr: -1, dc: 2 },
      { dr: 1, dc: -2 },
      { dr: -1, dc: -2 }
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

export default Knight
