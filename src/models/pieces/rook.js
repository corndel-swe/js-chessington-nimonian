import Square from '../square.js'
import Piece from './piece.js'

export default class Rook {
  constructor(player) {
    this.player = player
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

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
