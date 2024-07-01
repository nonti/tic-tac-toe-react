import { useModal } from "../hooks/useModal";
import ModalTemplate from "../components/Modals/ModalTemplate";
import React,{ createContext } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
  const { modal, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ modal, modalContent, handleModal }}>
      {children}
      <ModalTemplate/>
    </ModalContext.Provider>
  );
}