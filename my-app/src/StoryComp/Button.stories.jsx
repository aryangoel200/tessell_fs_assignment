import React from "react";
import Button from "../Components/FigmaComponents/Button";
import { Check } from "../Components/Icons";

import "../index.css";
import "../helper.css";
import "../App.css";
import "../Form.css";
import "../Components/FigmaComponents/Button.css";
import "../Components/Components.css";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: "select",
      options: ["Primary"],
    },
    size: {
      control: "select",
      options: ["Small", "Regular", "Large"],
    },
    _variantProp: {
      control: "select",
      labels: {
      isFullWidthTrue: "With Text",
      isFullWidthFalse: "No Text",
      iconOnly: "Icon Only"
    },
      options: ["true", "false", "iconOnly"],
      mapping: {
        isFullWidthTrue: "true",
        isFullWidthFalse: "false",
        
  }
    },
    state: {
      control: "select",
      options: ["Default", "Hover", "Focus", "Disabled", "loader",],
    },
    Icon: {
      control: false, // since it's a React component
    },
  },
};





const Template = (args) => (
  <div style={{ width: "fit-content", padding: "8px" }}>
    <Button {...args}>Submit</Button>
  </div>
);

// ✅ Default button with text
export const Default = Template.bind({});
Default.args = {
  type: "Primary",
  size: "regular",
  _variantProp: "true",
  state: "Default",
};
