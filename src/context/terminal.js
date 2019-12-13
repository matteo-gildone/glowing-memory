import React, { useReducer, useEffect } from "react";
import { go, start, notFound, help, intro } from "../executeCommand";

const TerminalStateContext = React.createContext();
const TerminalDispatchContext = React.createContext();

function terminalReducer(state, action) {
  switch (action.type) {
    case "CLEAR": {
      return {
        commands: []
      };
    }
    case "HELP": {
      return {
        commands: [...state.commands, help()]
      };
    }
    case "INTRO": {
      return {
        commands: [...state.commands, intro(action.type, action.payload)]
      };
    }
    case "START": {
      return {
        commands: [...state.commands, start(action.type, action.payload)]
      };
    }
    case "GO":
    case "WALK": {
      return {
        commands: [...state.commands, go(action.type, action.payload)]
      };
    }
    default: {
      return {
        commands: [...state.commands, notFound(action.type, action.payload)]
      };
    }
  }
}

function TerminalProvider({ children }) {
  const initialState = {
    room: "start",
    commands: []
  };
  const [state, dispatch] = useReducer(terminalReducer, initialState);
  useEffect(() => {
    const commandsList = document.querySelector(".c-terminal__terminal");
    if (commandsList) {
      commandsList.lastChild.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  }, [state.commands]);

  return (
    <TerminalStateContext.Provider value={state}>
      <TerminalDispatchContext.Provider value={dispatch}>
        {children}
      </TerminalDispatchContext.Provider>
    </TerminalStateContext.Provider>
  );
}

function useTerminalState() {
  const context = React.useContext(TerminalStateContext);
  if (context === undefined) {
    throw new Error("useTerminalState must be used within a TerminalProvider");
  }
  return context;
}

function useTerminalDispatch() {
  const context = React.useContext(TerminalDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useTerminalDispatch must be used within a TerminalProvider"
    );
  }
  return context;
}

export { TerminalProvider, useTerminalState, useTerminalDispatch };
