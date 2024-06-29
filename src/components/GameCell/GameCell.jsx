import React, { useContext } from 'react'
import { CellStyle } from './GameCell.styled'
import { GameContext } from '../../contexts/GameContext'
import { checkForWinner } from '../../utils/GameUtils'

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    checkForWinner(game.board);
    updateBoard(index)
    // if (result) {
    //   updateBoard(index);
    // }
  }
  
  return (
    <CellStyle onClick={() => {
      console.log(cellItem, index)
      updateBoard(index);
      cellClickHandler();
    }}>
      {cellItem}
    </CellStyle>
  )
}

export default GameCell
