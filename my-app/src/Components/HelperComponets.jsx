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


function Tag({mess, val}){
    return <div className="bh">
        <span className="bi">{mess} : {val}</span>
        <Close style={{ width: "18px", height: "18px" }} />
    </div>
}

export function Tags(){
    return <div className="be">
        <div>
            <label className="bb">Tags</label>
        </div>
        <div className="bf">
            <input className="bg" placeholder="Key"></input><span className="random">:</span><input className="bg" placeholder="Value"></input>
        </div>
        <div className="tags">
            <Tag mess={"key_input"} val={"value_input"}/>
            <Tag mess={"key1"} val={"val1"}/>
            {/* <Tag mess={"key1"} val={"val1"}/>
            <Tag mess={"key1"} val={"val1"}/> */}
        </div>
    </div>
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
          {Comp?<Comp />:<></>}
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
    <CustomCheckbox2 />
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


export function TableRow({noBorder}){
    return <>
    <div style={{display: "flex"}}>
        <div className={`td ${noBorder ? 'no-border' : ''}`}
        style={{background: "white"}}>
            <CustomCheckbox2/>
        </div>
        <TableCell mess={"Link"} code={1} noBd={noBorder}/>
        <TableCell mess={"Row Title"} code={2} noBd={noBorder}/>
        <TableCell mess={"Delete"} val={true} Comp={Trash} code={3} noBd={noBorder}/>
    </div>
    </>
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