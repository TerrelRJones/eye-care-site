import styled from "styled-components";
import { DoctorInfoCard } from "components/DoctorInfoCard/DoctorInfoCard";
import DoctorInfoCardContainer from ".";
import Docs from "data/docData";

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Containers",
  component: DoctorInfoCardContainer,
};

const Template = (args) => (
  <StoryContainer>
    <DoctorInfoCardContainer>
      {Docs.map((data) => (
        <DoctorInfoCard doctor={data} />
      ))}
    </DoctorInfoCardContainer>
  </StoryContainer>
);

export const DoctorCardContainer = Template.bind({});
DoctorCardContainer.args = {};
