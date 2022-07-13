import styled from "styled-components";

// components
import Card from "components/Card";
import CardContainer from "components/CardContainer";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";

// Cards
import { benefitCards } from "const/CTACardConst";
import { useEffect } from "react";
import { passwordValidation } from "utils/passwordValidator";

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
    const pass1 = passwordValidation("password");
    const pass2 = passwordValidation("Jones");
    const pass3 = passwordValidation("JonesTerrel");

    console.log(pass1);
    console.log(pass2);
    console.log(pass3);
  });
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
