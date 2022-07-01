import { HeartIcon, PinLightIcon, CardIcon } from "assets/icons/Icons";

export const reviewBenefitsCard = {
  title: "Review your benefits",
  text: "Review your benefits with VSP network doctors",
  icon: <HeartIcon />,
  buttonType: "primary",
  buttonLabel: "View Benefits",
  disabled: false,
  onClick: () => console.log("View Benefits Clicked"),
};

export const findADoctorCard = {
  title: "Find A Doctor",
  text: "Find a doctor on the VSP network to take advantage of exclusive memter-only savings and maximize your benefit.",
  icon: <PinLightIcon />,
  buttonType: "primary",
  buttonLabel: "Find A Doctor",
  disabled: false,
  onClick: () => console.log("Find A Doctor Clicked"),
};

export const viewMemberIdCard = {
  title: "Member ID Card",
  text: "There’s no ID card necessary. If you’d like a card as a reference, you can print your Member Vision Card.",
  icon: <CardIcon />,
  buttonType: "primary",
  buttonLabel: "View Member ID",
  disabled: false,
  onClick: () => console.log("View Member ID Clicked"),
};
