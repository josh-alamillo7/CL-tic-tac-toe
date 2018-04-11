const TicTacToe = function () {
  this.grid = {
    '[0,0]': ' ',
    '[0,1]': ' ',
    '[0,2]': ' ',
    '[1,0]': ' ',
    '[1,1]': ' ',
    '[1,2]': ' ',
    '[2,0]': ' ',
    '[2,1]': ' ',
    '[2,2]': ' '
  }
  this.turn = 'X'
}

TicTacToe.prototype.printBoard = function () {
  console.log(`${this.grid['[0,0]']}|${this.grid['[0,1]']}|${this.grid['[0,2]']}`)
  console.log(`------`)
  console.log(`${this.grid['[1,0]']}|${this.grid['[1,1]']}|${this.grid['[1,2]']}`)
  console.log(`------`)
  console.log(`${this.grid['[2,0]']}|${this.grid['[2,1]']}|${this.grid['[2,2]']}`)
}

TicTacToe.prototype.

let tictactoe = new TicTacToe()
tictactoe.printBoard()