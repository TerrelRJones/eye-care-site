import { SpecialOfferModal } from "./SpecialOfferModal";

export default {
  title: "Modal",
  component: SpecialOfferModal,
};

const Template = (args) => <SpecialOfferModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
