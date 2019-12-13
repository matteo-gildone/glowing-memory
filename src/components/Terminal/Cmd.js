import React from "react";
const Cmd = ({ adrSym, path, cmd, params, valid }) => {
  return (
    <div className="c-terminal__cmd">
      <span className="c-terminal__cmd--adrSym">{adrSym}</span>
      <span className="c-terminal__cmd--path">{path}</span>
      <span
        className={`c-terminal__cmd u-cmd--${valid ? "valid" : "not-valid"}`}
      >
        {cmd} {params.join(" ") || ""}
      </span>
    </div>
  );
};

export { Cmd };
