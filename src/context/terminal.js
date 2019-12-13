import React, { useReducer, useEffect } from "react";
import { go, start, notFound, help, intro, look } from "../executeCommand";

const TerminalStateContext = React.createContext();
const TerminalDispatchContext = React.createContext();

function terminalReducer(state, action) {
  switch (action.type) {
    case "CLEAR": {
      return {
        ...state,
        commands: []
      };
    }
    case "HELP": {
      return {
        ...state,
        commands: [...state.commands, help()]
      };
    }
    case "INTRO": {
      return {
        ...state,
        commands: [...state.commands, intro(action.type, action.payload)]
      };
    }
    case "START": {
      return {
        ...state,
        commands: [...state.commands, start(action.type, action.payload)]
      };
    }
    case "LOOK": {
      return {
        ...state,
        commands: [...state.commands, look(action.type, state.room)]
      };
    }
    case "GO":
    case "WALK": {
      return {
        ...state,
        commands: [...state.commands, go(action.type, action.payload)]
      };
    }
    default: {
      return {
        ...state,
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
    const commandsList = document.querySelector(".c-terminal");
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
