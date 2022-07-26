import { DoctorInfoCard } from "./DoctorInfoCard";
import Docs from "data/docData";

export default {
  title: "Doctor Info Card",
  component: DoctorInfoCard,
};

const Template = (args) => <DoctorInfoCard {...args} />;

export const Female = Template.bind({});
Female.args = {
  doctor: Docs[6],
};

export const Male = Template.bind({});
Male.args = {
  doctor: Docs[2],
};

export const NoNetwork = Template.bind({});
NoNetwork.args = {
  doctor: Docs[1],
};

export const NoAvi = Template.bind({});
NoAvi.args = {
  doctor: Docs[4],
};
