"use client";

import React, { useState, createContext, useContext } from "react";

type ModalContextType = {
  isOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
};

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  handleClose: () => {},
  handleOpen: () => {},
});

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    console.log("Open Modal");
    setIsOpen(true);
  };
  return (
    <ModalContext.Provider value={{ isOpen, handleClose, handleOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
