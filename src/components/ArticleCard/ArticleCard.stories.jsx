import { ArticleCard } from "./ArticleCard";

export default {
  title: "Article Card",
  component: ArticleCard,
};

const Template = (args) => <ArticleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  articleTag: "Eye Health and Wellness",
  headline: "Gaining on Glaucoma: Detection and Treatment",
  article:
    "Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news – early detection…",
};
