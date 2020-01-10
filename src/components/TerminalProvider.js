import React from "react";

const TerminalStateContext = React.createContext();
const TerminalDispatchContext = React.createContext();
const TerminalRefContext = React.createContext();

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

const useTerminalRef = () => {
  const context = React.useContext(TerminalRefContext);
  if (context === undefined) {
    throw new Error("useTerminalRef must be used within a TerminalProvider");
  }
  return context;
};

export {
  TerminalStateContext,
  TerminalDispatchContext,
  TerminalRefContext,
  useTerminalState,
  useTerminalDispatch,
  useTerminalRef
};
