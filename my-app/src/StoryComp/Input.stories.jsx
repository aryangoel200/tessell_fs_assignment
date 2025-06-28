
import Button from "../Components/FigmaComponents/Button";
import Input, { InputBase } from "../Components/FigmaComponents/Input";

import "../index.css";
import "../helper.css";
import "../App.css";
import "../Form.css";
import "../Components/FigmaComponents/Button.css";
import "../Components/Components.css";
import "../Components/FigmaComponents/Input.css";




export default {
    title: "Components/Input",
    component: Button,
    argTypes: {
        type: {
            control: "select",
            options: ["Default", "Dropdown", "Description","Password"],
        },

    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <Input {...args}>Submit</Input>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    type: "Primary",
};
