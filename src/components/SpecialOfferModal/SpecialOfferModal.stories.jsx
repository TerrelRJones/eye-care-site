import { SpecialOfferModal } from "./SpecialOfferModal";

export default {
  title: "Modal",
  component: SpecialOfferModal,
};

const Template = (args) => <SpecialOfferModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "",
  text: "Eyewear and eye care Special Offers are available at all VSPnetwork doctor locations. Save on so much more—like wellnessand nutrition, leisure and travel, family entertainment, andfinancial services to help bring you peace of mind.",
};
