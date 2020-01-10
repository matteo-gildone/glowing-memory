import { useReducer, useMemo } from "react";

function internalReducer(state, action) {
  switch (action.type) {
    case "CLEAR": {
      return {
        ...state,
        commands: [],
        newCommand: ""
      };
    }
    case "NEW-COMMAND": {
      return {
        ...state,
        commands: [...state.commands, action.payload.newCommand],
        newCommand: action.payload.newCommand
      };
    }
    default: {
      return state;
    }
  }
}

const useTerminal = (userReducer = (s, a) => a.internalChanges) => {
  const initialState = {
    newCommand: "init",
    commands: [],
    disableInput: false
  };

  const resolveChangesReducer = (currentInternalState, action) => {
    const internalChanges = internalReducer(currentInternalState, action);
    const userChanges = userReducer(currentInternalState, {
      ...action,
      internalChanges
    });
    return userChanges;
  };

  const [state, dispatch] = useReducer(resolveChangesReducer, initialState);

  const value = useMemo(() => [state, dispatch], [state, dispatch]);

  return value;
};

export { useTerminal };
