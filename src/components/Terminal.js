import React, { useRef, useEffect } from "react";

import { Cmd } from "./Cmd";
import { Input } from "./Input";
import { Result } from "./Result";
import { List } from "./List";
import { useTerminalState } from "./TerminalProvider";
const Terminal = ({ children }) => {
  const htmlRef = useRef(null);
  const { commands } = useTerminalState();
  useEffect(() => {
    htmlRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }, [commands]);
  return (
    <div ref={htmlRef} className="c-terminal">
      <div className="u-scanlines"></div>
      <div className="u-scanline"></div>
      <div className="u-flicker"></div>
      {children}
    </div>
  );
};

Terminal.Cmd = Cmd;
Terminal.Input = Input;
Terminal.Result = Result;
Terminal.List = List;

export { Terminal };
