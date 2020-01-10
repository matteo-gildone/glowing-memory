import React from "react";
import {
  TerminalStateContext,
  TerminalDispatchContext,
  TerminalRefContext
} from "./TerminalProvider";
const withContext = ({ WrappedComponent, state, dispatch, inputRef } = {}) => {
  const Wrapper = () => {
    return (
      <TerminalStateContext.Provider value={state}>
        <TerminalDispatchContext.Provider value={dispatch}>
          <TerminalRefContext.Provider value={inputRef}>
            <WrappedComponent />
          </TerminalRefContext.Provider>
        </TerminalDispatchContext.Provider>
      </TerminalStateContext.Provider>
    );
  };
  return Wrapper;
};

export { withContext };
