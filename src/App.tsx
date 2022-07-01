import Styled from "styled-components";

import CardContainer from "components/CardContainer";
import Card from "components/Card";
import { HeartIcon, PinLightIcon, CardIcon } from "assets/icons/Icons";
// import { ReactElement as HeartIcon } from "assets/images/heart_solid.svg";

const Container = Styled.div`
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
          <Card
            title="Review your benefits"
            text="Review your benefits with VSP network doctors"
            icon={<HeartIcon />}
            buttonType="primary"
            buttonLabel="View Benefits"
            disabled={false}
            onClick={() => console.log("View Benefits Clicked")}
          />
          <Card
            title="Find A Doctor"
            text="Find a doctor on the VSP network to take advantage of exclusive memter-only savings and maximize your benefit."
            icon={<PinLightIcon />}
            buttonType="primary"
            buttonLabel="Find A Doctor"
            disabled={false}
            onClick={() => console.log("Find A Doctor Clicked")}
          />
          <Card
            title="Member ID Card"
            text="There’s no ID card necessary. If you’d like a card as a reference, you can print your Member Vision Card."
            icon={<CardIcon />}
            buttonType="primary"
            buttonLabel="View Member ID Card"
            disabled={false}
            onClick={() => console.log("View Member ID Card Clicked")}
          />
        </CardContainer>
      </Container>
    </>
  );
}

export default App;
