import { useEffect } from "react";
import styled from "styled-components";

// components
import Card from "components/Card";
import CardContainer from "components/CardContainer";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";

// Cards
import { benefitCards } from "const/CTACardConst";

import {
  Category,
  getArticles,
  printArticles,
  sortArticlesBy,
  SortBy,
} from "utils/articleFunctions";
import ArticleCard from "components/ArticleCard";
import ArticleCardContainer from "components/ArticleCardContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  flex-wrap: wrap;
  margin: 0 auto;
`;

function App() {
  useEffect(() => {
    const articles = getArticles(Category.TECHNOLOGY);

    printArticles(articles);
    sortArticlesBy(SortBy.CONTENT, articles);
  }, []);

  return (
    <>
      <Container>
        <ContactUs title="Contact Us" linksTitle="Quick Links" />
        <CardContainer title="VSP Benefits are easy to use">
          {benefitCards.map((cardDetails) => (
            <Card key={cardDetails.title} {...cardDetails} />
          ))}
        </CardContainer>
        <ArticleCardContainer>
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Gaining on Glaucoma: Detection and Treatment"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news – early detection…"
          />
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Gaining on Glaucoma: Detection and Treatment"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news – early detection…"
          />
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Gaining on Glaucoma: Detection and Treatment"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news – early detection…"
          />
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Gaining on Glaucoma: Detection and Treatment"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news – early detection…"
          />
        </ArticleCardContainer>
        <Footer />
      </Container>
    </>
  );
}

export default App;
