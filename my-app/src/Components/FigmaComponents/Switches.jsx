import { SW } from "../Icons";

export default function Switches({size,isChecked,state}){
    return (<>

        <div className={`mainSw ${isChecked} ${size} ${state}`}>
            <div className={`secSw ${isChecked} ${size} ${state}`}>
                {console.log(isChecked)}
                    <SW className={`sW ${isChecked} ${size} ${state}`}/>
            </div>
        </div>
    </>)
}