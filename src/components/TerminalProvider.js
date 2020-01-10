import React from "react";

const TerminalStateContext = React.createContext();
const TerminalDispatchContext = React.createContext();

const useTerminalState = () => {
  const context = React.useContext(TerminalStateContext);
  if (context === undefined) {
    throw new Error("useTerminalState must be used within a TerminalProvider");
  }
  return context;
};

const useTerminalDispatch = () => {
  const context = React.useContext(TerminalDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useTerminalDispatch must be used within a TerminalProvider"
    );
  }
  return context;
};

export {
  TerminalStateContext,
  TerminalDispatchContext,
  useTerminalState,
  useTerminalDispatch
};
