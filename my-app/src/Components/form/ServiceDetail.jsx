import { useState } from "react";
import Description, { CustomCheckBox, DropBox, FigmaCheckbox, TableHeader, TableRow, Tags } from "../HelperComponets";
import { Check, Down, Checkbox, Calendar, Time, Union, Info2 } from "../Icons"


export function Heading({ mess, submess }) {
    return <div className="fv">
        <span className="fw">{mess}</span>
        <span className="fx">{submess}</span>
    </div>
}








export default function ServiceDetail() {
    const [selected, setSelected] = useState("none");
    return (
        <div className="yo">

           
            <div className="fb">
              
                <div className="fs">
                    <Heading mess={"Service Details"} submess={"Service Name, Service Description, Software Release"} />
                </div>
                <div className="ft" style={{ width: "657px" }}>
                    <DropBox mess={"Service Name"} Comp={Check} />
                    <Description />
                    <Tags />
                </div>
                <div className="bj">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="bk">Engine configuration</span>
                        <span className="fx">Adjustable parameters, performance optimization,  fine-tuning options</span>
                    </div>
                    <div className="bl">
                        <DropBox mess={"Software Release"} Comp={Down} />
                        <DropBox mess={"Version"} Comp={Down} />
                    </div>
                    <div className="bl" style={{ gap: "9px" }}>
                        <Checkbox />
                        <span className="fx">Create as a Container Database</span>
                    </div>
                </div>


            </div>

            <div className="ua">
                <Heading mess={"Additional settings"} submess={"Maintenance Window, Availability machine"} />
                <div className="ub">
                    <span className="uc">Maintenance Window</span>
                    <span className="ud">Describing what maintenance window is</span>
                </div>
                <div className="ui">
                    <div className="ue">
                        <span className="uf">Window Preference</span>
                        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                            <CustomCheckBox
                                text="No Preferences"
                                checked={selected === "none"}
                                onChange={() => setSelected("none")}
                            />
                            <CustomCheckBox
                                text="Select Window"
                                checked={selected === "select"}
                                onChange={() => setSelected("select")}
                            />
                            </div>
                    </div>
                    <div style={{ display: "flex", gap: "16px" }}>
                        <DropBox mess={"Start day"} Comp={Calendar} />
                        <DropBox mess={"Start time"} Comp={Time} />
                    </div>
                    <DropBox mess={"Duration"} Comp={Down} />
                    <div style={{ display: "flex", gap: "8px" }}>
                        <FigmaCheckbox />
                        <span className="uj">Enable auto minor version update</span>
                    </div>

                    <div className="uk">
                        <span className="un">Availability Machine Preferences</span>
                        <span className="um" style={{alignSelf: "stretch"}}>
                            Here you can define your data protection SLA and schedule. Once the database has been created, you can further define the data availability and access policies from the Availability Machine app.
                        </span>
                    </div>

                    <div style={{display:"flex", gap:"16px"}}>
                        <DropBox mess={"SLA"} />
                        <DropBox mess={"Snapshot"} Comp={Time}/>
                    </div>
                    <div>
                        <TableHeader/>
                        <TableRow/>
                        <TableRow/>
                        <TableRow/>
                    </div>

                    <div className="za">
                        <div className="zc" style={{display:"flex",gap: "8px"}} >
                            <Info2/>
                            <span className="zb">Projecting an estimate total count of 71 snapshots with the above configuration.</span>
                        </div>
                        <div>
                            <Union/>
                        </div>
                    </div>


                    



                </div>
            </div>
            


             

    </div>



    )
}