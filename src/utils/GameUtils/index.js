export const checkForSequence = (option1, option2, option3) => {
    return option1 === option2 && option2 === option3
}

export const checkForWinner = (board) => {
  
  //columns
  for (let i = 0; i < 3; i += 1){
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
        console.log('column winner')
      return true;
    }
  }

  // rows
  for (let i = 0; i < 9; i += 3){
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
        console.log('row winner')
      return true;
    }
  }

  //diagnol
  if (board[0] === board[4] && board[4] === board[8]) {
      console.log('diagonal winner')
    return true;
  }
  if (board[2] === board[4] && board[4] === board[6]) {
      console.log('diagonal winner')
    return true;
  }



}