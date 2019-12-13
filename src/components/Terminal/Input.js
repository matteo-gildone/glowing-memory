import React, { useState } from "react";
import { useTerminalDispatch } from "../../context/terminal";
import { simpleTokenize, stem } from "../../utils";
const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useTerminalDispatch();
  const log = text => e => {
    const [cmd, ...params] = simpleTokenize(text);
    e.preventDefault();
    dispatch({
      type: cmd.toUpperCase(),
      payload: {
        cmd,
        params,
        stem: stem(params)
      }
    });
    setText("");
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
