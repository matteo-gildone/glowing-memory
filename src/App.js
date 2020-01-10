import React, { useEffect } from "react";
import "./App.scss";

import { useTerminal } from "./hooks/useTerminal";

import { withContext } from "./components/widthContext";
import { Terminal } from "./components/Terminal";

const TerminalReducer = (state, action) => {
  console.log("Calling TerminalReducer", action.type);
  switch (action.type) {
    case "INIT": {
      return {
        ...action.internalChanges,
        commands: [...action.internalChanges.commands, action.payload.cmd],
        room: "start"
      };
    }
    case "START": {
      return {
        ...action.internalChanges,
        commands: [...action.internalChanges.commands, "I'm starting"],
        room: "start"
      };
    }
    case "NEW-COMMAND": {
      return {
        ...action.internalChanges,
        disableInput: true
      };
    }
    default: {
      console.log("TerminalReducer");
      return {
        ...action.internalChanges,
        commands: [
          ...action.internalChanges.commands,
          `command not found: ${action.payload.cmd}`
        ],
        disableInput: false
      };
    }
  }
};

const aaa = () => {
  return (
    <Terminal>
      <Terminal.List></Terminal.List>
      <Terminal.Input></Terminal.Input>
    </Terminal>
  );
};

function App() {
  const [state, dispatch] = useTerminal(TerminalReducer);
  const TerminalWithContext = withContext(aaa, state, dispatch);
  useEffect(() => {
    if (state.newCommand) {
      const [cmd, ...params] = state.newCommand.split(" ");
      dispatch({ type: cmd.toUpperCase(), payload: { cmd, params } });
    }
  }, [state.newCommand, dispatch]);
  return <TerminalWithContext />;
}
export default App;
