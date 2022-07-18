import { BREAK_POINTS } from "const/breakpoints";
import styled from "styled-components";

interface ArticleCardContainrProps {
  children: React.ReactNode;
}

const StyledArticleCardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 770px;
  width: 100%;
  /* background-color: green; */
  padding: 0;

  ${BREAK_POINTS.tablet} {
    align-items: center;
    justify-content: center;
  }

  ${BREAK_POINTS.mobile} {
    /* background-color: red; */
  }
`;

export const ArticleCardContainer = ({
  children,
}: ArticleCardContainrProps) => {
  return <StyledArticleCardContainer>{children}</StyledArticleCardContainer>;
};
