
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
import "../Components/FigmaComponents/Switches.css";
import TagsLA from "../Components/FigmaComponents/Tag";
import Switches from "../Components/FigmaComponents/Switches";





export default {
    title: "Components/Switch",
    component: Switches,
    argTypes: {
        size: {
            control: "select",
            options: ["Medium", "Small"],
        },
        isChecked:{
            control: "boolean",
            options: ["true","false"]
        },
        state: {
            control: "select",
            options: ["Default", "Focus","Disabled","Hover"],
        },

    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <Switches {...args}/>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    size:"",
    state: "",
    isChecked: ""
};
