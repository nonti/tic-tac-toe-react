import React, { useContext } from 'react';
import {Title, Subtitle} from '../../../styles/General.styled';
import { ModalBody, ModalFooter, ModalHeader } from '../Modal.styled';
import Button from '../../Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';

const RoundOverModal = () => {
  const { resetBoard } = useContext(GameContext);
  const { handleModal} = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title primary>Round Complete</Title>
      </ModalHeader>

      <ModalBody>
        <Subtitle primary>Choice will be switched now.</Subtitle>
        <Subtitle primary>Nonty : 1</Subtitle>
        <Subtitle primary>Kwetzy : 1</Subtitle>
      </ModalBody>

      <ModalFooter>
        <Button color='#f9c811' oncClick={() => {
          handleModal();
          resetBoard();
        }}>
          Continue</Button >
        <Button color='#8437f9'>Restart</Button >
      </ModalFooter>
    </>
    
  )
}

export default RoundOverModal;
