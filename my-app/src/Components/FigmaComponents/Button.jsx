import { FcheckMark, Fplus, Fspinner, Spinner } from '../Icons';
import './Button.css';
Spinner



export default function Button({ type, size, _variantProp, state }) {
    const isIconOnly = _variantProp === "iconOnly" && state!== "loader";
    const isSpinner = state === "loader";

    return (


        <div className={`buttonF ${size} ${_variantProp} ${state} ${type}`}>

            { isIconOnly  ? (
                <FcheckMark className={`cm ${state} ${type}`}/>
            ) : isSpinner ? (<><Spinner className={`icon1 dd ${state} ${size} ${type}`} /></>) : (
                <>
                    <Fplus className={`plus ${size} ${state} ${type}`} />
                    <span className={`span ${size} ${state} ${type}`}>Button CTA</span>
                </>
            )
            }
        </div>
    );
}