import React from "react";
import { Close, PlusWhite } from "../Icons";


export default function PriceModal() {
    return (
        <div className="fe">
            <div className="fm">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                    <span className="fk">Estimated Monthly Price*</span>
                    <span className="fl">View details</span>
                </div>
                <span className="fh">
                    $99.99
                </span>
            </div>
            <div className="button" onClick={()=>{}}>
                <PlusWhite />
                <span className="ff">Create service</span>
            </div>
        </div>
    );
} 