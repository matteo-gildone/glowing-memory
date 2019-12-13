import React from "react";
const Cmd = ({ adrSym, path, cmd, params, valid }) => {
  return (
    <div className="c-terminal__cmd">
      <span className="c-terminal__cmd--adrSym">{adrSym}</span>
      <span className="c-terminal__cmd--path">{path}</span>
      <span className={`c-terminal__cmd u-${valid ? "known" : "unknown"}-cmd`}>
        <span
          className={`c-terminal__cmd--command u-${
            valid ? "known" : "unknown"
          }-cmd`}
        >
          {cmd} {params.join(" ") || ""}
        </span>
      </span>
    </div>
  );
};

export { Cmd };
