import React, { useEffect } from "react";
import { useTerminalState, useTerminalDispatch } from "../../context/terminal";
import { Cmd } from "./Cmd";
import { Result } from "./Result";
const List = () => {
  const { commands } = useTerminalState();
  const dispatch = useTerminalDispatch();

  useEffect(() => {
    dispatch({
      type: "INTRO",
      payload: {
        cmd: [],
        params: [],
        stem: []
      }
    });
  }, []);

  const commandList = commands.map((command, index) => {
    return (
      <div key={`command-${index}`}>
        <Cmd
          adrSym="user@Glowing-Memory"
          path="~"
          cmd={command.cmd}
          params={command.params}
          valid={command.valid}
        />
        {command.result ? (
          <Result key={`result-${index}`}>{command.result}</Result>
        ) : null}
      </div>
    );
  });
  return <>{commandList}</>;
};

export { List };
