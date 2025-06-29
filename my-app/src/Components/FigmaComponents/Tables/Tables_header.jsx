import CheckBoxLA from "../Check_radio";

import { UpLa, DownLa } from "../../Icons";




export function Arrowfun({ sort_by }) {
  return (
    <div className="mainArrow">
      <div className="secArrow">
        <UpLa className={`upArr ${sort_by}`} />
        <DownLa className={`downArr ${sort_by}`} />
      </div>
    </div>
  )
}

export default function TableHeaderCell({ contentType, sort_by }) {
  let num = "row";
  if (contentType === "Selection" || contentType === "Spacer") { num = "SE" }
  let align=0;
  if (contentType=="Right"){align=1}



  return <>{num === "SE" ?
    <div className={`tble_header ${contentType}`}>
      {contentType !== "Spacer" ? <CheckBoxLA size={"default"} isChecked={false} /> : <></>}

    </div> :
    <>
      <div className={`tble_header ${contentType}`} >
          {align===0?
          <>
          <div className={`sec_tab`}><span className="spanTableHeader">Header</span><Arrowfun sort_by={sort_by}/></div>
          </>:<>
          <div className={`sec_tab right`}><Arrowfun sort_by={sort_by}/><span className="spanTableHeader">Header</span></div>
          </>}
      </div>

    </>}
  </>
}


export function TableHeaderRow(){
  return(
    <div className="headerRow">
      <TableHeaderCell contentType={"Selection"}/>
      <TableHeaderCell contentType={"Left"}/>
      <TableHeaderCell contentType={"Left"}/>
      <TableHeaderCell contentType={"Left"}/>
      <TableHeaderCell contentType={"Right"}/>
    </div>
  )
}