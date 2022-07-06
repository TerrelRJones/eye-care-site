import styled from "styled-components";

import CardContainer from "components/CardContainer";
import Card from "components/Card";

// Cards
import {
  reviewBenefitsCard,
  findADoctorCard,
  viewMemberIdCard,
} from "const/CTACardConst";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 15px;
`;

function App() {
  return (
    <>
      <Container>
        <CardContainer title="VSP Benefits are easy to use">
          <Card {...reviewBenefitsCard} />
          <Card {...findADoctorCard} />
          <Card {...viewMemberIdCard} />
        </CardContainer>
      </Container>
    </>
  );
}

export default App;
