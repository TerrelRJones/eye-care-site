import { useEffect, useState } from "react";
import styled from "styled-components";
import { TbChevronRight } from "react-icons/tb";

import ArticleCard from "components/ArticleCard";
import ArticleCardContainer from "components/ArticleCardContainer";
import { BREAK_POINTS } from "const/breakpoints";
import {
  Category,
  convertDate,
  getArticles,
  sortArticlesByDateTime,
} from "utils/articleFunctions";
import { Colors } from "styles/colors";
import { articleListLinkData } from "const/articleLinkData";
import { Article } from "models/articles";

const StyledArticleListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  ${BREAK_POINTS.articleListNav} {
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }

  ${BREAK_POINTS.tablet} {
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;

const LinksContainer = styled.div`
  max-height: 360px;
  margin-top: 40px;
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 40px;
  padding-left: 60px;

  h4 {
    margin-bottom: 0;
    line-height: normal;
    color: ${Colors.mountainBlue};
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
  }

  a {
    text-decoration: none;
    color: ${Colors.icyBlue};
    transition: 0.2s all ease-in-out;

    &:hover {
      color: ${Colors.mountainBlue};
      text-decoration: underline;
    }
  }

  ${BREAK_POINTS.articleListNav} {
    padding-left: 0;
  }

  ${BREAK_POINTS.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 770px;
    width: 100%;
    max-height: 65px;
    height: 100%;
    background-color: ${Colors.icyBlue};
  }
`;

const LinksInfoContainer = styled.div`
  ${BREAK_POINTS.articleListNav} {
    ul {
      display: flex;
      text-align: center;
      max-width: 770px;
      width: 100%;
      line-height: normal;
      justify-content: space-between;
    }
  }

  ${BREAK_POINTS.tablet} {
    display: none;
  }
`;

const UnderlineElement = styled.div`
  box-sizing: border-box;
  height: 2px;
  width: 32px;
  border: 1px solid ${Colors.mountainBlue};
`;

const MobileMenuText = styled.h2`
  font-family: Oswald;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 19.8px;
  color: ${Colors.white};
`;

const StyledMobileMenuContainer = styled.div`
  display: none;
  ${BREAK_POINTS.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
    width: 100%;
    padding-right: 15px;
    padding-left: 25px;
  }
`;

export const ArticleList = () => {
  const [data, setData] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const articles = await getArticles(Category.TECHNOLOGY);
    const sortedArticlesByDateTime = sortArticlesByDateTime(articles);

    setData(sortedArticlesByDateTime);
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <StyledArticleListContainer>
        <LinksContainer>
          <StyledMobileMenuContainer>
            <MobileMenuText onClick={() => console.log("Open Links")}>
              Viewing Eye Health and Wellness
            </MobileMenuText>
            <TbChevronRight size={30} color={`${Colors.white}`} />
          </StyledMobileMenuContainer>
          <LinksInfoContainer>
            <h4>All Topics</h4>
            <UnderlineElement />
            <div>
              <ul>
                {articleListLinkData.map(({ text, url, id }) => (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </LinksInfoContainer>
        </LinksContainer>
        <ArticleCardContainer>
          {data.map(({ id, date, time, title, content, imageUrl, url }) => (
            <div key={id}>
              <ArticleCard
                articleTag={convertDate(date, time).toDateString()}
                headline={title}
                article={content}
                imageUrl={imageUrl}
                url={url}
              />
            </div>
          ))}
        </ArticleCardContainer>
      </StyledArticleListContainer>
    </>
  );
};
