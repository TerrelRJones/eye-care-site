import { BREAK_POINTS } from "const/breakpoints";
import styled from "styled-components";
import { Colors } from "styles/colors";

interface ArticleCardProps {
  headline: string;
  articleTag: string;
  article: string;
  imageUrl: string;
  url?: string;
}

const StyledArticleContainer = styled.div`
  max-width: 370px;
  width: 100%;
  font-family: "Oswald";
  padding: 0;
  margin: 0;
  margin-top: 40px;

  ${BREAK_POINTS.mobile} {
    margin-top: 0;
  }

  ${BREAK_POINTS.xsMobile} {
    max-width: 100%;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 208px;
  background-color: ${Colors.articleBlack};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  ${BREAK_POINTS.mobile} {
    height: 186px;
  }
`;

const StyledInfoContainer = styled.div`
  ${BREAK_POINTS.xsMobile} {
    padding: 0 18px;
  }
`;

const CategoryTag = styled.h3`
  font-size: 16px;
  letter-spacing: 0;
  color: ${Colors.mountainBlue};
  margin: 0;
  padding-top: 21px;

  ${BREAK_POINTS.xsMobile} {
    padding-top: 17px;
  }
`;

const Headline = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 24px;
  color: ${Colors.icyBlue};
  text-decoration: none;
  margin: 0;
  padding: 0;
  letter-spacing: 0;
  line-height: 32px;
  font-weight: 400;
  width: 100%;
  transition: 0.2s all ease-in-out;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ArticleCard: React.FC<ArticleCardProps> = ({
  headline,
  article,
  articleTag,
  imageUrl,
  url,
}) => {
  return (
    <StyledArticleContainer>
      <StyledImageContainer>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={imageUrl} alt="test" />
        </a>
      </StyledImageContainer>
      <StyledInfoContainer>
        <CategoryTag>{articleTag}</CategoryTag>

        <Headline href={url} target="_blank">
          {headline}
        </Headline>

        <StyledArticleParagraph>{article}</StyledArticleParagraph>
      </StyledInfoContainer>
    </StyledArticleContainer>
  );
};
