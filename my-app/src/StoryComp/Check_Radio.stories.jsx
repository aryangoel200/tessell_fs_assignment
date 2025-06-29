import "../index.css";
import "../helper.css";
import "../App.css";
import "../Form.css";
import "../Components/FigmaComponents/Button.css";
import "../Components/Components.css";
import "../Components/FigmaComponents/Input.css";
import "../Components/FigmaComponents/Check_radio.css";
import CheckBoxLA from "../Components/FigmaComponents/Check_radio";




export default {
    title: "Components/Checks_Radios/Check",
    component: CheckBoxLA,
    argTypes: {
        size: {
            control: "select",
            options: ["Default", "Large"],
        },
        state: {
            control: "select",
            options: ["default", "Hover", "Focus","disabled"],
        },
        isChecked: {
            control: "boolean",
            options: ["true", "false"],
        },
        isImediate: {
            control: "boolean",
            options: ["true", "false"],
        },

    },
};




const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <CheckBoxLA {...args}/>
    </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
    size: "Large",
    state: "default",
    isChecked: true,
    isImediate: false,
};
