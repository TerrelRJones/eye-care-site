import styled from "styled-components";

// components
import Card from "components/Card";
import CardContainer from "components/CardContainer";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import ArticleList from "components/ArticleList";
import DoctorInfoCardContainer from "components/DoctorInfoCardContainer";

// Cards
import { benefitCards } from "const/CTACardConst";
import ChangeMyPassword from "components/ChangeMyPassword";
import SpecialOfferModal from "components/SpecialOfferModal";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Container>
        <SpecialOfferModal />
        <ContactUs title="Contact Us" linksTitle="Quick Links" />
        <ChangeMyPassword />
        <CardContainer title="VSP Benefits are easy to use">
          {benefitCards.map((cardDetails) => (
            <Card key={cardDetails.title} {...cardDetails} />
          ))}
        </CardContainer>
        <ArticleList />
        <DoctorInfoCardContainer />
        <Footer />
      </Container>
    </>
  );
}

export default App;
