import React from "react";
import searchIcon from "../assets/search.svg"; // adjust path as needed


export default function CustomInput({ size, state, Icon }) {
  return (
    <div className={`custom-input ${size} ${state}`}>
      <input
        className={`input-text ${size} ${state}`}
        placeholder="Text Input"
      />
      {Icon && <Icon className="icon"/>}
    </div>
  );
}