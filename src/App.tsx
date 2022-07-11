import { useEffect } from "react";

import styled from "styled-components";

import CardContainer from "components/CardContainer";
import Card from "components/Card";
import Footer from "components/Footer";

// Cards
import { benefitCards } from "const/CTACardConst";

import {
  CATEGORY,
  SORT_BY,
  getArticles,
  sortArticlesBy,
} from "utils/articleFunctions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  margin: 0 auto;
`;

function App() {
  useEffect(() => {
    const articles = getArticles(CATEGORY.TECHNOLOGY);
    sortArticlesBy(SORT_BY.AUTHOR, articles);
  }, []);
  return (
    <>
      <Container>
        <CardContainer title="VSP Benefits are easy to use">
          {benefitCards.map((cardDetails) => (
            <Card key={cardDetails.title} {...cardDetails} />
          ))}
        </CardContainer>
        <Footer />
      </Container>
    </>
  );
}

export default App;
