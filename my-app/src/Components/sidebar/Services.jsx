import React, { useState } from "react";

import { Provisioning, MyService, Availability, Dataflix, Library, Benchmark, Database, Pin } from '../Icons';



export function People({ Comp, mess }) {
    return (
        <div className="ak">
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "9px"
            }}>
                <Comp className="xsm" />
                <span className="al">{mess}</span>
            </div>
            <Pin />

        </div>
    );
}



function Service({ Comp, mess, isActive, onClick }) {
    return (
        <div className={`ah ${isActive ? "active" : ""}`} onClick={onClick}>
            <Comp className={`downarrow`} />
            {isActive ? (
                <span className="ai">{mess}</span>
            ) : (
                <span className="ai_not">{mess}</span>
            )}
        </div>
    );
}


export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0); // default active is MyService (index 0)

    const serviceList = [
        { Comp: MyService, mess: "My services" },
        { Comp: Provisioning, mess: "Provisioning" },
        { Comp: Availability, mess: "Availability Machines" },
        { Comp: Dataflix, mess: "Dataflix" },
        { Comp: Library, mess: "ScriptLibrary" },
        { Comp: Benchmark, mess: "Benchmarks" },
        { Comp: Database, mess: "Servers" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {serviceList.map((item, index) => (
                <Service
                    key={index}
                    Comp={item.Comp}
                    mess={item.mess}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    );
}