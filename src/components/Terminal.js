import React from "react";

import { Cmd } from "./Cmd";
import { Input } from "./Input";
import { Result } from "./Result";
import { List } from "./List";
const Terminal = ({ children }) => {
  return (
    <div className="c-terminal">
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
