import React from "react";
import ReactMarkdown from "react-markdown/with-html";

const Result = ({ children }) => (
  <div className="c-terminal__result">
    <pre>
      <output>
        <ReactMarkdown source={children} />
      </output>
    </pre>
  </div>
);

export { Result };
