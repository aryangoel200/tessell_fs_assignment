import { useState } from "react";
import { Check, CheckX, DownArrow, EyeClose } from "../Icons";

export default function Input({ type,size,state }) {
  let content = <Check />;
  if (type === "Dropdown") {
    content = <DownArrow />;
  } else if (type === "Password") {
    content = <EyeClose />;
  }

  return (
    <div className="main">
      <span className="lb">{type !== "Password"?"Label":"Password"}</span>
      <div className={`first ${type}`}>
        <input className="input" placeholder={type !== "Password"?"Text Input":"XXXXXXXXXXXX"}/>
            <div className="rdm">{content}</div>
      </div>
      
    </div>
  );
}






export function InputBase({ type, size, state }) {
  const isFilled = state === "filled" || state === "selected";

  const inputProps = isFilled
    ? { value: 'Text Input' }
    : { placeholder: 'Text Input' };

  const [value, setValue] = useState(isFilled ? "Text Input" : "");

  return (
    <div style={{width: "360px"}}>
    <div className={`first ${size} ${state}`}>
      <input
        className={`input ${size} ${state}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={!isFilled ? "Text Input" : ""}
      />
      <div style={{display: "flex", alignItems: "center",justifyContent: "center"}}>
      <Check className={`Check_input ${size} ${state}`} />
      </div>
    </div>
    </div>
  );
}