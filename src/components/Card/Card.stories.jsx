import { Card } from "./Card";
import heartIcon from "assets/icons/heart_solid.svg";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CTACard = Template.bind({});
CTACard.args = {
  title: "Review your benefits",
  text: "Review your benefits with VSP network doctors",
  icon: <img src={heartIcon} alt="Heart icon" />,
  buttonType: "primary",
  buttonLabel: "View Benefits",
  disabled: false,
};
