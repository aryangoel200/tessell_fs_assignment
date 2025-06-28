import { FcheckMark, Fplus, Fspinner, Spinner } from '../Icons';
import './Button.css';
Spinner



export default function Button({ type, size, _variantProp, state }) {
    const isIconOnly = _variantProp === "iconOnly" && state!== "loader";
    const isSpinner = state === "loader";

    return (


        <div className={`button ${size} ${_variantProp} ${state}`}>

            { isIconOnly  ? (
                <FcheckMark className={`cm ${state}`}/>
            ) : isSpinner ? (<><Spinner className={`icon1 dd ${state} ${size}`} /></>) : (
                <>
                    <Fplus className={`plus ${size} ${state}`} />
                    <span className={`span ${size} ${state}`}>Button CTA</span>
                </>
            )
            }
        </div>
    );
}