import { NewsLetterModal } from "./NewsLetterModal";

export default {
  title: "Modal",
  component: NewsLetterModal,
};

const Template = (args) => <NewsLetterModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
