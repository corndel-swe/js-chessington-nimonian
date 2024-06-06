import Square from '../square.js'
import Piece from './piece.js'

class Queen extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    return []
  }
}

export default Queen
