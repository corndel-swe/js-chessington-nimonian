import Board from './models/board.js'
import GameSettings from './models/gameSettings.js'
import Bishop from './models/pieces/bishop.js'
import King from './models/pieces/king.js'
import Knight from './models/pieces/knight.js'
import Pawn from './models/pieces/pawn.js'
import Queen from './models/pieces/queen.js'
import Rook from './models/pieces/rook.js'
import Player from './models/player.js'
import Square from './models/square.js'

let boardUI
let board

function squareToPositionString(square) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  return letters[square.col] + (square.row + 1).toString()
}

function positionStringToSquare(positionString) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  return new Square(
    parseInt(positionString.charAt(1), 10) - 1,
    letters.indexOf(positionString.charAt(0))
  )
}

function pieceToPieceString(piece) {
  const playerString = piece.player === Player.WHITE ? 'w' : 'b'

  if (piece instanceof Pawn) {
    return `${playerString}P`
  } else if (piece instanceof Rook) {
    return `${playerString}R`
  } else if (piece instanceof Knight) {
    return `${playerString}N`
  } else if (piece instanceof Bishop) {
    return `${playerString}B`
  } else if (piece instanceof Queen) {
    return `${playerString}Q`
  } else if (piece instanceof King) {
    return `${playerString}K`
  }
}

function boardToPositionObject() {
  let position = {}
  for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
    for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
      const square = new Square(row, col)
      const piece = board.getPiece(square)

      if (piece) {
        position[squareToPositionString(square)] = pieceToPieceString(piece)
      }
    }
  }
  return position
}

function onDragStart(source, piece, position, orientation) {
  for (const square of board
    .getPiece(positionStringToSquare(source))
    .getAvailableMoves(board)) {
    console.log(`square-${squareToPositionString(square)}`)
    document
      .getElementById('chess-board')
      .getElementsByClassName(`square-${squareToPositionString(square)}`)[0]
      .classList.add('square-highlight')
  }

  return (
    (board.currentPlayer === Player.WHITE && piece.search(/^w/) !== -1) ||
    (board.currentPlayer === Player.BLACK && piece.search(/^b/) !== -1)
  )
}

function onDrop(source, target) {
  const fromSquare = positionStringToSquare(source)
  const toSquare = positionStringToSquare(target)
  const pieceToMove = board.getPiece(fromSquare)

  for (const square of pieceToMove.getAvailableMoves(board)) {
    document
      .getElementById('chess-board')
      .getElementsByClassName(`square-${squareToPositionString(square)}`)[0]
      .classList.remove('square-highlight')
  }

  if (
    !pieceToMove
      ?.getAvailableMoves(board)
      .some(square => square.equals(toSquare))
  ) {
    return 'snapback'
  }
  pieceToMove.moveTo(board, toSquare)
  updateStatus()
}

function updateStatus() {
  const player = board.currentPlayer === Player.WHITE ? 'White' : 'Black'
  document.getElementById('turn-status').innerHTML = `${player} to move`
}

function boardInStartingPosition() {
  let board = new Board()

  for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
    board.setPiece(new Square(1, i), new Pawn(Player.WHITE))
    board.setPiece(new Square(6, i), new Pawn(Player.BLACK))
  }

  for (let i of [0, 7]) {
    board.setPiece(new Square(0, i), new Rook(Player.WHITE))
    board.setPiece(new Square(7, i), new Rook(Player.BLACK))
  }

  for (let i of [1, 6]) {
    board.setPiece(new Square(0, i), new Knight(Player.WHITE))
    board.setPiece(new Square(7, i), new Knight(Player.BLACK))
  }

  for (let i of [2, 5]) {
    board.setPiece(new Square(0, i), new Bishop(Player.WHITE))
    board.setPiece(new Square(7, i), new Bishop(Player.BLACK))
  }

  board.setPiece(new Square(0, 3), new Queen(Player.WHITE))
  board.setPiece(new Square(7, 3), new Queen(Player.BLACK))

  board.setPiece(new Square(0, 4), new King(Player.WHITE))
  board.setPiece(new Square(7, 4), new King(Player.BLACK))

  return board
}

function createChessBoard() {
  board = boardInStartingPosition()
  boardUI = window.ChessBoard('chess-board', {
    showNotation: false,
    draggable: true,
    position: boardToPositionObject(board),
    onDragStart,
    onDrop
  })
  updateStatus()
}

window.addEventListener('DOMContentLoaded', event => {
  createChessBoard()
})
