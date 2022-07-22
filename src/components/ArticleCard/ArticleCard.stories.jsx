import { ArticleCard } from "./ArticleCard";

export default {
  title: "Article Card",
  component: ArticleCard,
};

const Template = (args) => <ArticleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  articleTag: "19 July, 2022",
  headline: "LeBron James put on a show in his Drew League appearance",
  article:
    "The Drew League, a pro-am summer basketball league based in Los Angeles, has had its share of NBA players show up to dazzle fans and opponents alike.",
  imageUrl:
    "https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2021/1/lbj_utahjazz.jpg",
  url: "https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2021/1/lbj_utahjazz.jpg",
};
