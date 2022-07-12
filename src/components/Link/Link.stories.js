import Link from ".";
import InstagramIcon from "assets/icons/Instagram.png";
import { Colors } from "styles/colors";
import Styled from "styled-components";

export default {
  title: "Links",
  component: Link,
};

const Container = Styled.div`
display: grid;
place-items: center;
    background-color: ${Colors.mountainBlue};
    height: 100vh;
`;

const Template = (args) => (
  <Container>
    <Link {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  url: "/",
  text: "Default Link",
};

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = {
  url: "/",
  text: "Default Link",
  image: InstagramIcon,
  alt: "Instagram Icon",
};

export const LinkWithColor = Template.bind({});
LinkWithColor.args = {
  url: "/",
  text: "Default Link",
  color: `${Colors.lime}`,
};

export const LinkHovered = Template.bind({});
LinkHovered.args = {
  url: "/",
  text: "Default Link",
  color: `${Colors.white}`,
  hoverColor: `${Colors.icyBlue}`,
};
