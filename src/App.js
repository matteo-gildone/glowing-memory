import React from "react";
import { TerminalProvider } from "./context/terminal";
import { Terminal } from "./components/Terminal/Terminal";

function App() {
  return (
    <TerminalProvider>
      <Terminal>
        <Terminal.List></Terminal.List>
        <Terminal.Input></Terminal.Input>
      </Terminal>
    </TerminalProvider>
  );
}

export default App;
