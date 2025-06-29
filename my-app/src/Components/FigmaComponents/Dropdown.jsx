import { Check, DDIt } from "../Icons"
import Input from "./Input"


export default function DropDownLA({isClicked=true}){
    return <>
    <div className="maindd">
    <div className="ddLa">
       <Input type={"DropDown"}/>
       <HelpText/>
    </div>
    {isClicked?<>
    <div>
        <DDItem/>
        <DDItem/>
        <DDItem Checked={true}/>
    </div>
    </>:<></>}
    

    </div>
    </>
}



export function DDItem({Checked}){
    return <div className={`qwerty ${Checked}`}>
        <div className="randomShit">
    <DDIt className={`ddicon ${Checked}`}/>
    <span className={`spanItem ${Checked}`}>Item Title</span>
    </div>
    <span className={`spanItem2 ${Checked}`}>⌘ + E</span>
    </div>
}



export function HelpText({type}){
return <span className={`helpText ${type}`}>
    Only numbers between 100 ~ 1000 are allowed
</span>
}