import React from "react";
import { useTerminalState } from "./TerminalProvider";
import { Cmd } from "./Cmd";
const List = () => {
  const { commands } = useTerminalState();
  const commandList = commands.map((command, index) => {
    return (
      <div key={`command-${index}`}>
        <Cmd adrSym="user@Glowing-Memory" path="~" cmd={command} />
      </div>
    );
  });
  return <>{commandList}</>;
};

export { List };
