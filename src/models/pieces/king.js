import Square from '../square.js'
import Piece from './piece.js'

export default class King {
  constructor(player) {
    this.player = player
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

    for (let dir of dirs) {
      moves.push(new Square(loc.row + dir.dr, loc.col + dir.dc))
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
