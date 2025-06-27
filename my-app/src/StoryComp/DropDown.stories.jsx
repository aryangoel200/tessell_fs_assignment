import React from "react";
import { DropBox } from "../Components/HelperComponets";
import { Check, Down } from "../Components/Icons"; // Make sure this is a React component (e.g., from @svgr/webpack)
import '../index.css';
import '../helper.css';
import '../App.css';

import '../Form.css'

export default {
  title: "Components/DropBox",
  component: DropBox,
};

const Template = (args) => (
  <div style={{ width: "fit-content", border: "1px solid #eee", padding: "16px" }}>
    <DropBox {...args} />
  </div>
);

// ▼ Default Input Mode (not dropdown)
export const InputMode = Template.bind({});
InputMode.args = {
  mess: "Input Field",
  click: false, // renders as input
  Comp: Check,
};

// ▼ Dropdown Mode with Icon
export const DropdownWithIcon = Template.bind({});
DropdownWithIcon.args = {
  mess: "Choose Option",
  click: true, // renders as dropdown
  Comp: Down, // a React component (icon)
};

// ▼ Dropdown Without Icon
export const DropdownNoIcon = Template.bind({});
DropdownNoIcon.args = {
  mess: "Dropdown No Icon",
  click: true,
};