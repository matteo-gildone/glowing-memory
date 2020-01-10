import React from "react";
import {
  TerminalStateContext,
  TerminalDispatchContext,
  TerminalRefContext
} from "./TerminalProvider";
const withContext = (WrappedComponent, state, dispatch, ref) => {
  const Wrapper = () => {
    return (
      <TerminalStateContext.Provider value={state}>
        <TerminalDispatchContext.Provider value={dispatch}>
          <TerminalRefContext.Provider value={ref}>
            <WrappedComponent />
          </TerminalRefContext.Provider>
        </TerminalDispatchContext.Provider>
      </TerminalStateContext.Provider>
    );
  };
  return Wrapper;
};

export { withContext };
