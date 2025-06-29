
import Button from "../Components/FigmaComponents/Button";
import Input, { InputBase } from "../Components/FigmaComponents/Input";

import "../index.css";
import "../helper.css";
import "../App.css";
import "../Form.css";
import "../Components/FigmaComponents/Button.css";
import "../Components/Components.css";
import "../Components/FigmaComponents/Input.css";
import { HelpText } from "../Components/FigmaComponents/Dropdown";





export default {
    title: "Components/Checks_Radios/HelpText",
    component: HelpText,
    argTypes: {
        type: {
            control: "select",
            options: ["Primary", "Danger", "Success","Default","Warning"],
        },
    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" , border:"1px dotted #525F7A"}}>
        <HelpText {...args}/>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    type: "Primary",
};
