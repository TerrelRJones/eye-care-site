import TwitterIcon from "assets/icons/Twitter.png";
import FacebookIcon from "assets/icons/Facebook.png";
import InstagramIcon from "assets/icons/Instagram.png";
import YouTubeIcon from "assets/icons/YouTube.png";
import PinterestIcon from "assets/icons/pinterest-icon.png";

import { LinkProps } from "components/Link/Link";

export type FooterLink = {
  title: string;
  abrvTitle?: string;
  links: LinkProps[];
};

export const FOOTER_LINKS: FooterLink[] = [
  {
    title: "About",
    links: [
      { text: "About this Site", url: "." },
      { text: "About VSP", url: "." },
      { text: "Become a VSP Provider", url: "." },
      { text: "Careers", url: "." },
      { text: "Frame Gallery", url: "." },
      { text: "Sitemap", url: "." },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "Contact Us", url: "." },
      { text: "Call Member Services", url: "." },
      { text: "Email Member Services", url: "." },
      { text: "Member Grievance Form", url: "." },
      { text: "FAQs", url: "." },
    ],
  },
  {
    title: "Legal and Privacy",
    abrvTitle: "Legal",
    links: [
      { text: "Legal", url: "." },
      { text: "Non-Discrimination Statement", url: "." },
      { text: "Notice of Privacy Practices", url: "." },
      { text: "Patient Rights", url: "." },
      { text: "Terms of Service", url: "." },
    ],
  },

  {
    title: "Related Sites",
    links: [
      { text: "VSP Direct", url: "." },
      { text: "VSP Global", url: "." },
      { text: "Eyeconic", url: "." },
      { text: "Eyes of Hope", url: "." },
      { text: "International Sites", url: "." },
    ],
  },

  {
    title: "Connect",
    links: [
      { text: "Twitter", url: ".", image: TwitterIcon, alt: "Twitter Icon" },
      { text: "Facebook", url: ".", image: FacebookIcon, alt: "Facebook Icon" },
      { text: "YouTube", url: ".", image: YouTubeIcon, alt: "YouTube Icon" },
      {
        text: "Pinterest",
        url: ".",
        image: PinterestIcon,
        alt: "Pinterest Icon",
      },
      {
        text: "Instagram",
        url: ".",
        image: InstagramIcon,
        alt: "Instagram Icon",
      },
    ],
  },
];
