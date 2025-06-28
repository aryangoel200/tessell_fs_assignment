import { CheckLa, DotLa, MinusLa } from "../Icons"

export default function CheckBoxLA({state,size,isChecked,isImediate}){
    let ckn="xim";
    

   

if(isChecked){
    if (isImediate){
        ckn="m";
    }
    else{
        ckn="c";
    }
}
    return (
        
        <>
        
        
        <div className={`mainCB ${size} ${state} ${ckn} `}>
            
            {!isChecked?<></>:isImediate?<MinusLa className={`minusCB ${size} ${state} ${ckn}`}/>:<CheckLa className={`checkCB ${size} ${state} ${ckn}`}/>}
        </div>
        


        </>
        
       
    )
}


export function RadioLa({state,size,isChecked}){
    let fu;
    if (isChecked){
        fu="true";
    }
    else{
        fu="false";
    }
    return (
    <>
        <div className={`mainRd ${state} ${size} ${fu}`}>
            {isChecked? <DotLa className={`dotRd ${state} ${size} ${fu}`}/>:null}
        </div>
        </>
    )
}