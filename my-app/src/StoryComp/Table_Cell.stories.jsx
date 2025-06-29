
import Button from "../Components/FigmaComponents/Button";
import Input, { InputBase } from "../Components/FigmaComponents/Input";

import "../index.css";
import "../helper.css";
import "../App.css";
import "../Form.css";
import "../Components/FigmaComponents/Button.css";
import "../Components/Components.css";
import "../Components/FigmaComponents/Input.css";
import "../Components/FigmaComponents/Tables/Tables.css";
import TableHeader from "../Components/FigmaComponents/Tables/Tables_header";
import TableHeaderCell from "../Components/FigmaComponents/Tables/Tables_header";
import TableCell from "../Components/FigmaComponents/Tables/TableRow";




export default {
    title: "Components/Table/Cell",
    component: TableCell,
    argTypes: {
        contentType: {
            control: "select",
            options: ["Text","Number","Link","checkbox","Status","Spacer","Action"],
        },
        isSelected: {
            control: "boolean",
            options: [true, false],
        },
        density: {
            control: "select",
            options: ["Compact", "Expanded"],
        },
        state:{
            control: "select",
            options: ["Default","Hover","Focus","Active"]
        }

    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <TableCell {...args}/>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    contentType: "checkbox",
    isSelected: true,
    density:"Expanded",
    state:"Default"
    
};
