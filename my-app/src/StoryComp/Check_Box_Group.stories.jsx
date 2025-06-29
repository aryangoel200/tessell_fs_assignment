
import Button from "../Components/FigmaComponents/Button";
import Input, { InputBase } from "../Components/FigmaComponents/Input";

import "../index.css";
import "../helper.css";
import "../App.css";
import "../Form.css";
import "../Components/FigmaComponents/Button.css";
import "../Components/Components.css";
import "../Components/FigmaComponents/Input.css";
import "../Components/FigmaComponents/Tag.css";
import "../Components/FigmaComponents/Check_group.css";
import TagsLA from "../Components/FigmaComponents/Tag";
import Check_group from "../Components/FigmaComponents/Check_group";





export default {
    title: "Components/Checks_Radios/Groups",
    component: Check_group,
    argTypes: {
        selected: {
            control: "boolean",
            options: ["true", "false"],
        },
        state: {
            control: "select",
            options: ["Default", "disabled","Hover"],
        },

    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <Check_group {...args}/>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    selected:"",
    state: ""
};
