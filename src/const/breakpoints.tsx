const sizes = {
  xsMobile: "450px",
  mobile: "576px",
  tablet: "992px",
  articleListNav: "1100px",
};

export const BREAK_POINTS = {
  xsMobile: `@media (max-width: ${sizes.xsMobile})`,
  mobile: `@media (max-width: ${sizes.mobile})`,
  tablet: `@media (max-width: ${sizes.tablet})`,
  articleListNav: `@media (max-width: ${sizes.articleListNav})`,
};
