import React from "react";
import {
  TerminalStateContext,
  TerminalDispatchContext
} from "./TerminalProvider";
const withContext = (WrappedComponent, state, dispatch) => {
  const Wrapper = () => {
    return (
      <TerminalStateContext.Provider value={state}>
        <TerminalDispatchContext.Provider value={dispatch}>
          <WrappedComponent />
        </TerminalDispatchContext.Provider>
      </TerminalStateContext.Provider>
    );
  };
  return Wrapper;
};

export { withContext };
