
import Button from "../Components/FigmaComponents/Button";
import Input, { InputBase } from "../Components/FigmaComponents/Input";

import "../index.css";
import "../helper.css";
import "../App.css";
import "../Form.css";
import "../Components/FigmaComponents/Button.css";
import "../Components/Components.css";
import "../Components/FigmaComponents/Input.css";
import TableHeader from "../Components/FigmaComponents/Tables/Tables_header";




export default {
    title: "Components/Table_Header",
    component: TableHeader,
    argTypes: {
        size: {
            control: "select",
            options: ["Default", "Small", "Large"],
        },
        state: {
            control: "select",
            options: ["default", "filled", "focus","selected","disabled"],
        },

    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <TableHeader {...args}/>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    type: "Primary",
};
