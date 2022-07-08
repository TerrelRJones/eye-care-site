import heartIcon from "assets/icons/heart_solid.svg";
import pinIcon from "assets/icons/pin_solid.svg";
import cardIcon from "assets/icons/card_solid.svg";

import { CardProps } from "components/Card/Card";

export const benefitCards: CardProps[] = [
  {
    title: "Review your benefits",
    text: "Review your benefits with VSP network doctors",
    icon: <img src={heartIcon} alt="Member ID Icon" />,
    buttonType: "primary",
    buttonLabel: "View Benefits",
    disabled: false,
    onClick: () => console.log("View Benefits Clicked"),
  },
  {
    title: "Find A Doctor",
    text: "Find a doctor on the VSP network to take advantage of exclusive memter-only savings and maximize your benefit.",
    icon: <img src={pinIcon} alt="Location pin icon" />,
    buttonType: "primary",
    buttonLabel: "Find A Doctor",
    disabled: false,
    onClick: () => console.log("Find A Doctor Clicked"),
  },

  {
    title: "Member ID Card",
    text: "There’s no ID card necessary. If you’d like a card as a reference, you can print your Member Vision Card.",
    icon: <img src={cardIcon} alt="Member ID Icon" />,
    buttonType: "primary",
    buttonLabel: "View Member ID",
    disabled: false,
    onClick: () => console.log("View Member ID Clicked"),
  },
];
