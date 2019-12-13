import React, { useRef, useEffect } from "react";
import "./Terminal.scss";
import { Cmd } from "./Cmd";
import { Input } from "./Input";
import { Result } from "./Result";
import { List } from "./List";
const Terminal = ({ children }) => {
  const refBody = useRef();

  useEffect(() => {
    const { current } = refBody;

    const handleClick = () => {
      document.getElementById("input").focus();
    };

    current.addEventListener("click", handleClick);

    return () => {
      current.removeEventListener("click", handleClick);
    };
  });
  return (
    <div ref={refBody} className="c-terminal">
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
