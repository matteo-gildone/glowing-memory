import React, { useEffect } from "react";
import { map } from "./data/story.js";
import "./App.scss";

import { useTerminal } from "./hooks/useTerminal";
import { useFocus } from "./hooks/useFocus";

import { withContext } from "./components/widthContext";
import { Terminal } from "./components/Terminal";

const TerminalReducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return {
        ...action.internalChanges,
        commands: [
          ...action.internalChanges.commands,
          { cmd: map["init"].description, isResult: true }
        ],
        room: "start"
      };
    }
    case "START": {
      return {
        ...action.internalChanges,
        commands: [
          ...action.internalChanges.commands,
          { cmd: map["start"].description, isResult: true }
        ],
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
      return {
        ...action.internalChanges,
        commands: [
          ...action.internalChanges.commands,
          { cmd: `command not found: ${action.payload.cmd}`, isResult: true }
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
  const [inputRef, setInputFocus] = useFocus();

  const TerminalWithContext = withContext(aaa, state, dispatch, inputRef);
  useEffect(() => {
    if (state.newCommand) {
      const [cmd, ...params] = state.newCommand.split(" ");
      dispatch({ type: cmd.toUpperCase(), payload: { cmd, params } });
    }
  }, [state.newCommand, dispatch]);

  return (
    <div onClick={e => setInputFocus()}>
      <TerminalWithContext />
    </div>
  );
}
export default App;
