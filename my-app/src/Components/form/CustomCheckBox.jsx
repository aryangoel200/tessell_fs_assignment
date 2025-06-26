import React, { useState } from "react";
import { Check4 } from "../Icons";
// import { ReactComponent as CheckIcon } from "./CheckIcon.svg"; // Or any component

export function FigmaCustomCheckbox({ checked }) {
  return (
    <span
      style={{
        display: "flex",
        width: "16px",
        height: "16px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "32px",
        border: checked
          ? "1px solid #0942B3"
          : "1px solid #697691",
        background: "#FFF",
        boxSizing: "border-box",
      }}
    >
      {checked && <Check4 className="kx" />}
    </span>
  );
}