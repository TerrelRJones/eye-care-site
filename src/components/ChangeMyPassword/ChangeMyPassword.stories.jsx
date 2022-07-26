import { ChangeMyPassword } from "./ChangeMyPassword";

export default {
  title: "Password",
  component: ChangeMyPassword,
};

const Template = (args) => <ChangeMyPassword {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
