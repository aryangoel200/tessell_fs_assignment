import CheckBoxLA from "../Check_radio";

export default function TableHeaderCell({contentType}){
  let num="row";
  if (contentType==="Selection" || contentType ==="Spacer"){num="selection"}

return <><div className="tble_header">
  <div className="prop">
    <CheckBoxLA size={"default"}/>
  </div>
      
</div>
</>
}