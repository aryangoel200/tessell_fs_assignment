import React, { useState } from "react";
import {CheckX } from "./Icons";

export default function CustomCM({
  checked,
  onChange,
  disabled,
  error,
  size = "md"
}) {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const isControlled = checked !== undefined;

  const handleClick = () => {
    if (disabled) return;
    const newVal = !isChecked;
    if (!isControlled) setIsChecked(newVal);
    if (onChange) onChange(newVal);
  };

  const active = isControlled ? checked : isChecked;

  return (
    <div
      className={`custom-checkbox ${size} ${active ? "checked" : ""} ${disabled ? "disabled" : ""} ${error ? "error" : ""}`}
      onClick={handleClick}
      role="checkbox"
      aria-checked={active}
    >
      {active && <CheckX className="checkbox-icon" />}
    </div>
  );
}