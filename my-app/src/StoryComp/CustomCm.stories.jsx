import React from "react";
import Description from "../Components/HelperComponets";
import '../index.css';
import '../helper.css';
import '../App.css';
import '../Components/Components.css'
import '../Form.css'

// Default export required by Storybook


export default {
  title: "Components/Input field",
  component: Description,
};

const Template = (args) => (
  <div style={{ width: "400px", border: "1px solid #ddd", padding: "8px" }}>
    <Description {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  
};