import { useEffect } from "react";

import styled from "styled-components";

import CardContainer from "components/CardContainer";
import Card from "components/Card";

// Cards
import { benefitCards } from "const/CTACardConst";
import { filterByJobTitle } from "utils/doctorFunctions";
import { getArticles, printArticles } from "utils/articleFunctions";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 16px;
`;

function App() {
  useEffect(() => {
    const articles = getArticles("technology");
    printArticles(articles);
    filterByJobTitle("Ophthalmologist");
  }, []);
  return (
    <>
      <Container>
        <CardContainer title="VSP Benefits are easy to use">
          {benefitCards.map((cardDetails) => (
            <Card key={cardDetails.title} {...cardDetails} />
          ))}
        </CardContainer>
      </Container>
    </>
  );
}

export default App;
