import React from "react";
import { ModalContextProvider } from "./modalContext";

function Provider({ children }: { children: React.ReactNode }) {
  return <ModalContextProvider>{children}</ModalContextProvider>;
}

export default Provider;
