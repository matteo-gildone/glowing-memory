import React from "react";
import { Terminal } from "./components/Terminal/Terminal";
function App() {
  return (
    <div className="App">
      <Terminal>
        <Terminal.Cmd
          adrSym="user@Curly-Carnival"
          path="~"
          cmd="cd"
          params={["bar"]}
          valid={true}
        />
      </Terminal>
    </div>
  );
}

export default App;
