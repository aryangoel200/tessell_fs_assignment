import { CopyLa, DeleteLa, DotLa2, EditLa } from "../../Icons";
import CheckBoxLA from "../Check_radio";




export default function TableCell({isSelected,density,contentType,state}){


    let comp;
    let icon=<>
        <div className="actionmain">
            <div className="actionSec"><CopyLa className="actionIcon"/><span className="actionSpan">Copy</span></div>
            <div className="actionSec"><EditLa className="actionIcon"/><span className="actionSpan">Edit</span></div>
            <div className="actionSec"><DeleteLa className="actionIcon"/><span className="actionSpan">Delete</span></div>
        </div>
    </>
    if (contentType==="Text"){
        comp=<><span className="rowT">Row Title</span><span className="descri">Description</span></>
    }else if(contentType==="Number"){
        comp=<><span className="rowT">0123456789</span><span className="descri">Description</span></>
    }else if(contentType==="Link"){
        comp=<span className="linkcell">Link</span>
    }else if(contentType==="checkbox"){
        comp=<CheckBoxLA size={"default"} isChecked={isSelected} isImediate={false} state={"default"}/>
    }else if(contentType==="Status"){
        comp=<div className="labelmain"><DotLa2 className="dotla"/><span className="spanLabel">Lable</span></div>
    }else if(contentType==="Spacer"){comp=<></>}
    else if(contentType=="Action"){comp=icon}
    else{
        comp=<><span className="rowT">Row Title</span><span className="descri">Description</span></>
    }
    return<>
        <div className={`mainTCell ${density} ${state} ${isSelected} ${contentType}`}>
            {comp}
        </div>
    </>
}