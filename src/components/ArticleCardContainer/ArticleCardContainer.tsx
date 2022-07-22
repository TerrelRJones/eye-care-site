import { BREAK_POINTS } from "const/breakpoints";
import styled from "styled-components";

interface ArticleCardContainerProps {
  children: React.ReactNode;
}

const StyledArticleCardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 770px;
  width: 100%;
  padding-right: 114px;

  ${BREAK_POINTS.articleListNav} {
    padding-right: 0;
  }

  ${BREAK_POINTS.tablet} {
    align-items: center;
    justify-content: center;
  }
`;

export const ArticleCardContainer = ({
  children,
}: ArticleCardContainerProps) => {
  return <StyledArticleCardContainer>{children}</StyledArticleCardContainer>;
};
