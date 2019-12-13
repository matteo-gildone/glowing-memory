import React from "react";
import "./Terminal.scss";
import { Cmd } from "./Cmd";
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

export { Terminal };
