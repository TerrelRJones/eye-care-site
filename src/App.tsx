import styled from "styled-components";

// components
import Card from "components/Card";
import CardContainer from "components/CardContainer";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";

// Cards
import { benefitCards } from "const/CTACardConst";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: 576px) {
    /* padding: 15px; */
  }
`;

function App() {
  return (
    <>
      <Container>
        <ContactUs title="Contact Us" linksTitle="Quick Links" />
        <CardContainer title="VSP Benefits are easy to use">
          {benefitCards.map((cardDetails) => (
            <Card {...cardDetails} />
          ))}
        </CardContainer>
        <Footer />
      </Container>
    </>
  );
}

export default App;
