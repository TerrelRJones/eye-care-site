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
  filterByJobTitle,
  filterByNetwork,
  JobTitle,
  Network,
  searchByName,
} from "utils/doctorFunctions";

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
    filterByNetwork(Network.ADVANTAGE);
    filterByJobTitle(JobTitle.OPTOMETRIST);
    searchByName("Va");
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

        <Footer />
      </Container>
    </>
  );
}

export default App;
