import Button from '.';


export default {
  title: 'Buttons',
  component: Button,

} 

const Template= (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  buttonType: "primary",
  disabled: false,
}
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  buttonType: "secondary",
  disabled: false,
}
export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary",
  buttonType: "tertiary",
  disabled: false,

};