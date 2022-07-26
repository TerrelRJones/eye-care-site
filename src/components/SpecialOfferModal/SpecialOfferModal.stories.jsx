import { SpecialOfferModal } from "./SpecialOfferModal";

export default {
  title: "Modal",
  component: SpecialOfferModal,
};

const Template = (args) => <SpecialOfferModal {...args} />;

export const SpecialOffer = Template.bind({});
SpecialOffer.args = {};
