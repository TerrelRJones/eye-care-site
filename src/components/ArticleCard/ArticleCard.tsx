import { BREAK_POINTS } from "const/breakpoints";
import { url } from "inspector";
import styled from "styled-components";
import { Colors } from "styles/colors";

interface ArticleCardProps {
  headline: string;
  articleTag: string;
  article: string;
  imageUrl: string;
}

const StyledArticleContainer = styled.div`
  max-width: 370px;
  width: 100%;
  font-family: "Oswald";
  padding: 0;
  margin: 0;
  margin-top: 40px;

  ${BREAK_POINTS.mobile} {
    max-width: 100%;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  max-height: 208px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  font-weight: 400;
  width: 100%;
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
  imageUrl,
}: ArticleCardProps) => {
  return (
    <StyledArticleContainer>
      <StyledImageContainer>
        <img src={imageUrl} alt="test" />
      </StyledImageContainer>
      <CategoryTag>{articleTag}</CategoryTag>
      <Headline>{headline}</Headline>
      <StyledArticleParagraph>
        {article.length > 103 ? `${article.substring(0, 103)}...` : article}
      </StyledArticleParagraph>
    </StyledArticleContainer>
  );
};
