import { BlueDot, Oracle, WhiteDot } from "../Icons"


function Line(){
    return <span style={{
                        display: "inline-block",
                        width: "1px",
                        height: "10px",
                        background: "var(--Color-Surface-surface-200, #DBE0EB)",
                    }} />
}

export default function Info() {
    return (<div>

        {/* <div
            style={{
            position: "absolute",
            top: 146,         // Touches top border
            bottom: 590,      // Touches bottom border
            left: "265.5px",   // 16px padding + 3px (half of 6px dot)
            width: "1px",
            backgroundColor: "var(--Color-Surface-surface-200, #DBE0EB)",
            zIndex: 0,
            }}
        ></div> */}

        <div  className="fr">
            <div className="a1">
        <BlueDot style={{width:"6px", height:"6px",fill:
            "var(--Color-Primary-primary-200, #0942B3)",
        }}/></div>
           <div className="fn" >
            <span className="fo">Service Details</span>
            <div className="fp">
                <div style={{display: "flex", gap: "6px", alignItems:"center"}}>
                    <span className="fq">Oracle_service</span>
                    <Oracle  style={{align:"center"}}/>
                    <span style={{
                        display: "inline-block",
                        width: "1px",
                        height: "10px",
                        background: "var(--Color-Surface-surface-200, #DBE0EB)",
                    }} />

                </div>
                <span className="fq">oracle_para_profile</span>
            </div>
        </div>
    </div>
    







    <div  className="fr" style={{width: "339px"}}>
        <div>
        <WhiteDot style={{width:"6px", height:"6px"}}/></div>
           <div className="fn">
            <span className="fo" style={{color:"#1A2031"}}>Aditional Setting</span>
            <div className="fp">
                <div style={{display: "flex", gap: "6px", alignItems:"center"}}>
                    <span className="fq">No Preference</span>
                    <span className="fq">Enabled minor version update</span>
                    <Line/>
                </div>
                <div style={{display: "flex", gap: "6px", alignItems:"center"}}>
                <span className="fq">7-day PITR</span>
                <span className="fq">01:00 snapshot time</span>
                <Line/>
                </div>
            </div>
        </div>
        
    </div>

    </div> 








)
}