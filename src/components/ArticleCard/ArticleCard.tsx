import styled from "styled-components";
import { Colors } from "styles/colors";

interface ArticleCardProps {
  headline: string;
  articleTag: string;
  article: string;
}

const StyledArticleContainer = styled.div`
  max-width: 370px;
  width: 100%;
  font-family: "Oswald";
  padding: 0;
  margin-top: 40px;
`;

const StyledImageContainer = styled.div`
  background-color: blue;
  width: 100%;
  /* change back to max-hieght */
  height: 208px;
`;

const CategoryTag = styled.h3`
  font-size: 16px;
  letter-spacing: 0;
  color: ${Colors.mountainBlue};
  margin: 0;
  padding-top: 21px;
`;

const Headline = styled.h2`
  font-size: 26px;
  color: ${Colors.icyBlue};
  margin: 0;
  padding: 0;
  letter-spacing: 0;
  line-height: 39px;
`;

const StyledArticleParagraph = styled.p`
  font-family: "Open Sans";
  font-size: 14px;
  color: ${Colors.articleBlack};
  letter-spacing: 0;
  line-height: 20px;
  margin: 0;
  padding: 0;
  padding-top: 6px;
`;

export const ArticleCard = ({
  headline,
  article,
  articleTag,
}: ArticleCardProps) => {
  return (
    <StyledArticleContainer>
      <StyledImageContainer>image</StyledImageContainer>
      <CategoryTag>{articleTag}</CategoryTag>
      <Headline>{headline}</Headline>
      <StyledArticleParagraph>{article}</StyledArticleParagraph>
    </StyledArticleContainer>
  );
};
