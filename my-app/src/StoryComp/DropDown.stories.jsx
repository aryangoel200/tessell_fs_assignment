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
import "../Components/FigmaComponents/Dropdown.css";

import TagsLA from "../Components/FigmaComponents/Tag";
import DropDownLA from "../Components/FigmaComponents/Dropdown";

export default {
    title: "Components/DropDown",
    component: DropDownLA,
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["Medium", "Large"],
        },
        state: {
            control: { type: "select" },
            options: ["Default", "Focus", "Disabled"],
        },
    },
};

const Template = (args) => (
    <div style={{ width: "fit-content", padding: "8px" }}>
        <DropDownLA {...args} />
    </div>
);

// ✅ Default Story
export const Default = Template.bind({});
Default.args = {
    size: "",
    state: "",
};