import { useEffect, useState } from "react";
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

  ${BREAK_POINTS.tablet} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
  }
`;

export const DoctorInfoCardContainer: React.FC = () => {
  const [data, setData] = useState(DoctorData);

  const sortDocsByLastName = () => {
    const docs = data.sort((a, b) =>
      a.last_name > b.last_name ? 1 : a.last_name < b.last_name ? -1 : 0
    );

    return docs;
  };

  useEffect(() => {
    setData(DoctorData);
  }, [data]);
  return (
    <StyledDoctorInfoCardContainer>
      {sortDocsByLastName().map((data: any) => (
        <DoctorInfoCard key={data.id} {...data} />
      ))}
    </StyledDoctorInfoCardContainer>
  );
};
