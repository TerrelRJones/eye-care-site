import { Card } from "components/Card/Card";
import CardContainer from ".";
import { benefitCards } from "const/CTACardConst";

import styled from "styled-components";

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Containers",
  component: CardContainer,
};

const Template = (args) => (
  <StoryContainer>
    <CardContainer {...args}>
      {benefitCards.map((cardDetails) => (
        <Card key={cardDetails.title} {...cardDetails} />
      ))}
    </CardContainer>
  </StoryContainer>
);

export const BenifitCardContainer = Template.bind({});
BenifitCardContainer.args = {
  title: "VSP Benefits are easy to use",
};
