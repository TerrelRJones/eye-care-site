import styled from "styled-components";
import { Colors } from "styles/colors";

type Props = {};

const StyledDoctorInfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 370px;
  width: 100%;
  max-height: 352px;
  padding-top: 23px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);

  .docInfoContainer {
    margin-top: 15px;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: beige;
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

const DoctorName = styled.h2`
  margin: 0;
  padding-top: 17px;
  font-family: "Oswald";
  font-weight: 300px;
  font-size: 22px;
  letter-spacing: 0;
  line-height: 24.2px;
  text-align: center;
  color: ${Colors.mountainBlue};
`;

const Occupation = styled.h3`
  margin: 0;
  padding-top: 8px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 25px;
  text-align: center;
`;

const DocInfo = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans";
  color: ${Colors.mountainBlue};

  h4 {
    font-weight: 600;
    margin-right: 5px;
    margin: 0;
  }

  p {
    font-weight: 300;
    margin: 0;
  }
`;

export const DoctorInfoCard = (props: Props) => {
  return (
    <StyledDoctorInfoCardContainer>
      <Avatar>PHOTO</Avatar>
      <DoctorName>Dr. Scott M Amoruso</DoctorName>
      <Occupation>Optometrist</Occupation>
      <div className="docInfoContainer">
        <DocInfo>
          <h4>Gender:</h4>
          <p>Male</p>
        </DocInfo>
        <DocInfo>
          <h4>License Number:</h4>
          <p>10927</p>
        </DocInfo>
        <DocInfo>
          <h4>NPI Number:</h4>
          <p>1477549608</p>
        </DocInfo>
      </div>
    </StyledDoctorInfoCardContainer>
  );
};
