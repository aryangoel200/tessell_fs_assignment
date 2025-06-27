import CustomCM from "./CustomCM";
import { FigmaCustomCheckbox } from "./form/CustomCheckBox";
import { Check, Close, CC, Asc, Desc, Trash } from "./Icons";
import React, { useState } from "react";



export default function Description(){
    return (
    <div className="ba">
            <div>
            <span className="bb">Description (optional)</span>
        </div>
        <div className="bc">
            <input className="bd" placeholder="Add a description"></input>
        </div>
    </div>
);
}


function Tag({mess, val, onRemove}){
    return <div className="bh">
        <span className="bi">{mess} : {val}</span>
        <Close style={{ width: "18px", height: "18px" }}  onClick={onRemove}/>
    </div>
}


export function Tags() {
  const [tags, setTags] = useState([
    { id: 1, mess: "key_input", val: "value_input" },
    { id: 2, mess: "key1", val: "val1" },
  ]);
  const [keyInput, setKeyInput] = useState("");
  const [valInput, setValInput] = useState("");

  const removeTag = (id) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && keyInput.trim() && valInput.trim()) {
      e.preventDefault();
      setTags((prev) => [
        ...prev,
        {
          id: Date.now(), // unique ID
          mess: keyInput.trim(),
          val: valInput.trim(),
        },
      ]);
      setKeyInput("");
      setValInput("");
    }
  };

  return (
    <div className="be">
      <div>
        <label className="bb">Tags</label>
      </div>
      <div className="bf">
        <input
          className="bg"
          placeholder="Key"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="random">:</span>
        <input
          className="bg"
          placeholder="Value"
          value={valInput}
          onChange={(e) => setValInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="tags">
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            mess={tag.mess}
            val={tag.val}
            onRemove={() => removeTag(tag.id)}
          />
        ))}
      </div>
    </div>
  );
}















export function DropBox({ mess, Comp }) {
  return (
    <div className="ha">
      <div className="hd">
        <span className="hb">{mess}</span>
      </div>

      <div className="he">
        <div className="hh">
          <input placeholder="Your text here" className="hi" />
        </div>
        <div className="hf">
          {Comp?<Comp/>:<></>}
        </div>
      </div>
    </div>
  );
}



export function CustomCheckBox({ text, checked, onChange }) {
  return (
    <div className="ug" onClick={onChange}>
      <FigmaCustomCheckbox checked={checked} />
      <span className="uh">{text}</span>
    </div>
  );
}


export function FigmaCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="figma-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className={`box ${checked ? "checked" : ""}`}>
        {checked && <CC className="image"/>}
      </span>
    </label>
  );
}




export function TableHeader(){
    return <>
    <div style={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
  <div className="td">
    <CustomCM size="md"/>
  </div>

  {/* FLEX CONTAINER FOR THE CELLS */}
  <div style={{ display: "flex", flex: 1 }}>
    <Headercell />
    <Headercell />
    <Headercell val={true} />
  </div>
</div>
    </>
}


export function TableRow({ noBorder, onDelete, rowId }) {
  return (
    <div style={{ display: "flex" }}>
      <div className={`td ${noBorder ? 'no-border' : ''}`} style={{ background: "white" }}>
        <CustomCM size="md"/>
      </div>
      <TableCell mess={"Link"} code={1} noBd={noBorder} />
      <TableCell mess={"Row Title"} code={2} noBd={noBorder} />
      <TableCell
        mess={"Delete"}
        val={true}
        code={3}
        noBd={noBorder}
        Comp={() => <Trash onClick={() => onDelete(rowId)} style={{ cursor: "pointer" }} />}
      />
    </div>
  );
}


function Headercell({ val, noBd }) {
  return (
    <div
      className="ta"
      style={{
        ...(val && { justifyContent: "flex-end" }) 
      }}
    >
      {val ? (
        <>
          <div className="tf">
            <div className="tg">
              <Asc />
              <Desc />
            </div>
          </div>
          <span className="tb">Header</span>
        </>
      ) : (
        <>
          <span className="tb">Header</span>
          <div className="tf">
            <div className="tg">
              <Asc />
              <Desc />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function TableCell({val,mess,Comp,code,noBd}){
    return (
    <div
      className={`ta ${noBd ? 'no-border' : ''}`}
      style={{
        display: "flex",
        background: "white",
        ...(val && { justifyContent: "flex-end" }) 
      }}
    >
       {val?(<div style={{display: "flex",gap: "8px",alignItems:"center"}}>
      {Comp&&<Comp/>}
      <Help mess={mess} code={code}/>
      </div>):(
        <div style={{display: "flex",gap: "8px", alignItems:"center"}}>
      <Help mess={mess} code={code}/>
      {Comp&&<Comp/>}
      </div>
      )}
    </div>
  );
}


export function Help({mess,code}){
    return <span className={
        code===1?"tk":code===2?"tl":"tm"
    }>{mess}</span>
}






export  function CustomCheckbox2({ checked, onChange }) {
  const [internalChecked, setInternalChecked] = useState(checked ?? false);

  const toggle = () => {
    const newValue = !internalChecked;
    setInternalChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label className="checkbox-wrapper" onClick={toggle}>
      <input
        type="checkbox"
        checked={internalChecked}
        onChange={toggle}
        className="native-checkbox"
      />
      <span className="custom-checkbox">
        {internalChecked && <CC style={{ width: "10px", height: "10px" }} />}
      </span>
    </label>
  );
}