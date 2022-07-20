import styled from "styled-components";

import DoctorData from "data/docData";

import { DoctorInfoCard } from "components/DoctorInfoCard/DoctorInfoCard";
import { BREAK_POINTS } from "const/breakpoints";

const StyledDoctorInfoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 770px;
  width: 100%;
  margin: 0;
  /* padding: 0 16px; */

  ${BREAK_POINTS.tablet} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
  }
`;

export const DoctorInfoCardContainer: React.FC = () => {
  return (
    <StyledDoctorInfoCardContainer>
      {DoctorData.map((data) => (
        <DoctorInfoCard key={data.id} {...data} />
      ))}
    </StyledDoctorInfoCardContainer>
  );
};
