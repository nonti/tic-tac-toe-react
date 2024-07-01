import React from 'react'
import { PlayerWrapper } from './Player.styled';

const Player = ({player}) => {
  return (
    <PlayerWrapper>
    <div>
      {player.name} ({player.score})
      </div>
      <div>
        {player.score}
      </div>
    </PlayerWrapper>
  )
}

export default Player;
