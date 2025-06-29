
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
import TagsLA from "../Components/FigmaComponents/Tag";





export default {
    title: "Components/Tags",
    component: TagsLA,
    argTypes: {
        size: {
            control: "select",
            options: ["Medium", "Large"],
        },
        state: {
            control: "select",
            options: ["Default", "Focus","Disabled"],
        },

    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <TagsLA {...args}/>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    size:"",
    state: ""
};
