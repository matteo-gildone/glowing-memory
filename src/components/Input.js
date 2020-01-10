import React, { useState } from "react";
import { useTerminalDispatch, useTerminalRef } from "./TerminalProvider";

const Input = () => {
  const [text, setText] = useState("");
  const inputEl = useTerminalRef();
  const dispatch = useTerminalDispatch();
  const log = text => e => {
    e.preventDefault();
    if (text) {
      dispatch({
        type: "NEW-COMMAND",
        payload: {
          newCommand: text
        }
      });
      inputEl.current.focus();
      setText("");
    }
  };
  return (
    <div className="c-terminal__command-line">
      <div className="c-terminal__cmd">
        <span className="c-terminal__cmd--adrSym">user@Glowing-Memory</span>
        <span className="c-terminal__cmd--path">~</span>
        <span className={`c-terminal__cmd`}>
          <span className="u-typed-cursor">{text}</span>
        </span>
      </div>
      <form onSubmit={log(text)}>
        <input
          ref={inputEl}
          id="input"
          autoFocus
          onChange={e => setText(e.target.value)}
          type="text"
          value={text}
        />
      </form>
    </div>
  );
};

export { Input };
