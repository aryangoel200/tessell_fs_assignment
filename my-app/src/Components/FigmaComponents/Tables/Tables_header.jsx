// import CustomCM from "../CustomCM";
import { FigmaCustomCheckbox } from "./form/CustomCheckBox";
import { Check, Close, CC, Asc, Desc, Trash } from "../../Icons";
import React, { useState } from "react";
import { Down } from "../../Icons";
import CustomCM from "../../CustomCM";


Down

export default  function TableHeader(){
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