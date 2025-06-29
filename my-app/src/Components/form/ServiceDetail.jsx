import { useState } from "react";
import Description, { CustomCheckBox, DropBox, FigmaCheckbox, TableHeader, TableRow, Tags } from "../HelperComponets";
import { Check, Down, Checkbox, Calendar, Time, Union, Info2 } from "../Icons"
import TableWrapper from "../Table";
import CustomCM from "../CustomCM";



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
                    <DropBox mess={"Service Name"} Comp={Check} val={"oracle_09_2023"}/>
                    <Description />
                    <Tags />
                </div>
                <div className="bj">
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="bk">Engine configuration</span>
                        <span className="fx">Adjustable parameters, performance optimization,  fine-tuning options</span>
                    </div>
                    <div className="bl">
                        <DropBox mess={"Software Release"} Comp={Down} click={true}/>
                        <DropBox mess={"Version"} Comp={Down} click={true} val={"21.0.0.0.0"}/>
                    </div>
                    <div className="bl" style={{ gap: "9px" }}>
                        <CustomCM size="lg" custom="true" disabled={true}/>
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
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap"}}>
                        <DropBox mess={"Start day"} Comp={Calendar} val={"Sunday"}/>
                        <DropBox mess={"Start time"} Comp={Time} val={"04:00"}/>
                    </div>
                    <DropBox mess={"Duration"} Comp={Down} click={true} val={"0.5"}/>
                    <div style={{ display: "flex", gap: "8px",alignItems:"center" }}>
                        
                        <CustomCM size="md" style={{background:"#F2F4F8"}}/>
                        <span className="uj">Enable auto minor version update</span>
                    </div>

                    <div className="uk">
                        <span className="un">Availability Machine Preferences</span>
                        <span className="um" style={{alignSelf: "stretch"}}>
                            Here you can define your data protection SLA and schedule. Once the database has been created, you can further define the data availability and access policies from the Availability Machine app.
                        </span>
                    </div>

                    <div style={{display:"flex", gap:"16px", flexWrap:"wrap"}}>
                        <DropBox mess={"SLA"} val={"Dev-QA-SLA"}/>
                        <DropBox mess={"Snapshot"} Comp={Time} val={"04:00"}/>
                    </div>
                
                    {/* <div style={{borderRadius: "5px",overflow: "hidden", border: "1px solid #DBE0EB",width: "100%"}}>
                        <TableHeader/>
                        <TableRow/>
                        <TableRow/>
                        <TableRow/>
                        <TableRow noBorder={true}/>
                    </div> */}

                    <TableWrapper/>




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