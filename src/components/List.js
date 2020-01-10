import React from "react";
import { useTerminalState } from "./TerminalProvider";
import { Cmd } from "./Cmd";
import { Result } from "./Result";
const List = () => {
  const { commands } = useTerminalState();
  const commandList = commands.map((command, index) => {
    return (
      <div key={`command-${index}`}>
        {command.isResult ? (
          <Result>{command.cmd}</Result>
        ) : (
          <Cmd adrSym="user@Glowing-Memory" path="~" cmd={command} />
        )}
      </div>
    );
  });
  return <>{commandList}</>;
};

export { List };
