import ContactUs from ".";

export default {
  title: "Contact Us",
  component: ContactUs,
};

const Template = (args) => <ContactUs {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Contact Us",
  linksTitle: "Quick Links",
};
