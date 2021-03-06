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
        room: "start",
        inventory: []
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
    case "HELP": {
      return {
        ...action.internalChanges,
        commands: [
          ...action.internalChanges.commands,
          { cmd: map["help"].description, isResult: true }
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
    case "LOOK": {
      const items = map[state.room].items;
      if (items.length > 0) {
        const itemMessages = items.map(item => ({ cmd: item, isResult: true }));
        return {
          ...action.internalChanges,
          commands: [...action.internalChanges.commands, ...itemMessages],
          room: items
        };
      }
      return {
        ...action.internalChanges,
        commands: [
          ...action.internalChanges.commands,
          { cmd: `Nothing interesting here... Next room!`, isResult: true }
        ],
        disableInput: false
      };
    }
    case "GO": {
      const nextRoom = map[state.room].exits[action.payload.params[0]];
      if (nextRoom) {
        return {
          ...action.internalChanges,
          commands: [
            ...action.internalChanges.commands,
            { cmd: map[nextRoom].description, isResult: true }
          ],
          room: nextRoom
        };
      }
      return {
        ...action.internalChanges,
        commands: [
          ...action.internalChanges.commands,
          { cmd: `You cannot go ${action.payload.params[0]}`, isResult: true }
        ],
        disableInput: false
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

  const TerminalWithContext = withContext({
    WrappedComponent: aaa,
    state,
    dispatch,
    inputRef
  });
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
