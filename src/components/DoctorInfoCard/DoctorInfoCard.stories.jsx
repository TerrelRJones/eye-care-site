import { DoctorInfoCard } from "./DoctorInfoCard";

export default {
  title: "Doctor Info Card",
  component: DoctorInfoCard,
};

const Template = (args) => <DoctorInfoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
