import styled from "styled-components";
import { Colors } from "styles/colors";

import avatarIcon from "assets/icons/Image_Icon.svg";
import { BREAK_POINTS } from "const/breakpoints";
import { Doctor } from "data/docData";

interface DoctorInfoCardProps {
  doctor: Doctor;
}

const StyledDoctorInfoCardContainer = styled.div<
  Pick<Doctor, "doctor_networks">
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 370px;
  width: 100%;
  max-height: 352px;
  padding-top: 23px;
  background-color: ${Colors.white};
  margin-bottom: 30px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);

  .docInfoContainer {
    margin-top: 15px;
  }

  ${BREAK_POINTS.mobile} {
    max-width: 288px;
    margin-bottom: 20px;

    .docInfoContainer {
      margin-bottom: ${({ doctor_networks }) =>
        !doctor_networks ? "53px" : "14px"};
      margin-top: ${({ doctor_networks }) => !doctor_networks && "15px"};
    }
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 100%;
  }
`;

const DoctorName = styled.h2<Pick<Doctor, "gender">>`
  margin: 0;
  padding-top: 17px;
  font-family: "Oswald";
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24.2px;
  text-align: center;
  color: ${({ gender }) =>
    gender === "Female" ? Colors.mountainBlue : Colors.icyBlue};
  transition: 0.2s all ease-in-out;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
  color: ${Colors.mountainBlue};
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
    margin: 0;
    margin-right: 5px;
  }

  p {
    font-weight: 300;
    margin: 0;
  }

  ${BREAK_POINTS.mobile} {
    h4 {
      font-weight: 300;
    }

    .genderTag {
      display: none;
    }
  }
`;

const Networks = styled.div<Pick<Doctor, "doctor_networks">>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  ${({ doctor_networks }) =>
    !doctor_networks ? "min-height: 80px" : "max-height: 80px"};
  height: 100%;
  margin-top: 14px;
  background-color: ${Colors.netWorkWhite};
  ${({ doctor_networks }) =>
    !doctor_networks ? "padding: 0" : "padding: 18px 0px"};
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  color: ${Colors.mountainBlue};

  h4 {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: 0;
    font-weight: 400;
  }

  ${BREAK_POINTS.mobile} {
    display: ${({ doctor_networks }) => !doctor_networks && "none"};
    margin-top: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const DoctorInfoCard = ({ doctor }: DoctorInfoCardProps) => {
  const {
    first_name,
    last_name,
    job_title,
    gender,
    license_number,
    npi_number,
    doctor_networks,
    avatar,
  } = doctor;
  return (
    <StyledDoctorInfoCardContainer doctor_networks={doctor_networks}>
      <Avatar>
        <img src={avatar ? avatar : avatarIcon} alt="VSP Avatar Icon" />
      </Avatar>
      <DoctorName
        gender={gender}
      >{`Dr. ${first_name} ${last_name}`}</DoctorName>
      <Occupation>{job_title}</Occupation>
      <div className="docInfoContainer">
        <DocInfo>
          <h4 className="genderTag">Gender:</h4>
          <p>{gender}</p>
        </DocInfo>
        <DocInfo>
          <h4>License Number:</h4>
          <p>{license_number}</p>
        </DocInfo>
        <DocInfo>
          <h4>NPI Number:</h4>
          <p>{npi_number}</p>
        </DocInfo>
      </div>
      <Networks doctor_networks={doctor_networks}>
        {doctor_networks && (
          <>
            <h4>NPI Number:</h4>
            <Flex>
              <p>{doctor_networks.join(", ")}</p>
            </Flex>
          </>
        )}
      </Networks>
    </StyledDoctorInfoCardContainer>
  );
};
