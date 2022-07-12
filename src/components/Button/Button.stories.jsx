import Button from ".";
import styled from "styled-components";

export default {
  title: "Buttons",
  component: Button,
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Template = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  buttonType: "primary",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  buttonType: "secondary",
  disabled: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary",
  buttonType: "tertiary",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  buttonType: "primary",
  disabled: true,
};
