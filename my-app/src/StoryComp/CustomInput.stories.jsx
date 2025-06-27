import React from "react";
import CustomInput from "../Components/CustomInput";
import '../index.css';
import '../helper.css';
import '../App.css';
import '../Form.css';
import { Check } from "../Components/Icons";

export default {
  title: "Components/CustomInput",
  component: CustomInput,
  argTypes: {
    size: {
      control: "select",
      options: ["default"],
    },
    state: {
      control: "select",
      options: ["filled", "default", "disabled"],
    },
  },
};

const Template = (args) => (
  <div style={{ width: "200px", padding: "8px" }}>
    <CustomInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "default",
  state: "default",
  Icon: Check
};

export const Small = Template.bind({});
Small.args = {
  size: "default",
  state: "default",
};

