import React from "react";
import { Avatar, Bell, Close, DB, Help, Mic } from "../Icons";


export default function Header() {
    return <><div className="am">

        <div className="am1">
            <span>Provisioning</span>
            <span>/</span>
            <span>Relational Databases</span>
            <span>/</span>
            <span>Oracle Server</span>
        </div>


        <div className="an">
            <span className="ao">Credits: $365</span>
            <span style={{
                display: "inline-block",
                width: "1px",
                height: "20px",
                background: "var(--Color-Surface-surface-200, #DBE0EB)",
                margin: "0 8px",
            }} />
            <div className="ap"><Mic style={{ height: "20px", width: "20px" }} /></div>
            <div className="ap"><Help style={{ height: "20px", width: "20px" }} /></div>
            <div className="ap"><Bell style={{ height: "20px", width: "20px" }} /></div>
            <div className="ap"><Avatar style={{ height: "24px", width: "24px", borderRadius: "24px" }} /></div>
        </div>
    </div >
        <div className="am">
            <div className="aq">
                <span className="ar">Create New Oracle Database Service</span>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                
                <div className="as">
                <DB />
                <span className="liga">Code</span>
                </div>
                <div style={{
                    display: "flex",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6.4px"
                }}>
                    <Close />
                </div>

            </div>
        </div>

    </>
}