import Styled from "styled-components";

// components
import Card from "components/Card";
import CardContainer from "components/CardContainer";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";

// Cards
import {
  reviewBenefitsCard,
  findADoctorCard,
  viewMemberIdCard,
} from "const/CTACardConst";

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  margin: 0 auto;

  @media(max-width: 576px){

    /* padding: 15px; */
  }
`;

function App() {
  return (
    <>
      <Container>
        <ContactUs title="Contact Us" linksTitle="Quick Links" />
        <CardContainer title="VSP Benefits are easy to use">
          <Card {...reviewBenefitsCard} />
          <Card {...findADoctorCard} />
          <Card {...viewMemberIdCard} />
        </CardContainer>
        <Footer />
      </Container>
    </>
  );
}

export default App;
