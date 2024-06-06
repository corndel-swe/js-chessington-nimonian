import Square from '../square.js'
import Piece from './piece.js'

export default class Bishop {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    console.log(loc)

    const moves = []
    const dirs = [
      { dr: 1, dc: 1 },
      { dr: 1, dc: -1 },
      { dr: -1, dc: 1 },
      { dr: -1, dc: -1 }
    ]

    for (let dir of dirs) {
      let candidate = new Square(loc.row + dir.dr, loc.col + dir.dc)
      while (board.contains(candidate)) {
        moves.push(candidate)
        candidate = new Square(candidate.row + dir.dr, candidate.col + dir.dc)
      }
    }

    console.table(moves)

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
