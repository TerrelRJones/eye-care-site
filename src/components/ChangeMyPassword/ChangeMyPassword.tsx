import Button from "components/Button";
import styled from "styled-components";
import { Colors } from "styles/colors";

type Props = {};

const StyledChangeMyPasswordContainer = styled.div`
  max-width: 570px;
  width: 100%;
  background-color: ${Colors.white};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled.div`
  padding-left: 27px;
  padding-top: 30px;
  .title {
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 24px;
    margin: 0;
    color: ${Colors.mountainBlue};
  }

  .info {
    font-family: "Open Sans";
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
    margin: 0;
    padding-top: 10px;
    padding-right: 35px;
    font-weight: 300;
    color: ${Colors.articleBlack};
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 280px;
  /* gap: 44px; */
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 27px;
  padding-top: 20px;
  padding-bottom: 67px;
`;

const PasswordContainer = styled.div`
  max-width: 227px;
  width: 100%;
  max-height: 280px;
  height: 100%;
`;

const PasswordRequirementsContainer = styled.div`
  max-width: 240px;
  width: 100%;
  color: ${Colors.mountainBlue};
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;

  /* margin-right: 30px; */

  .text {
    margin: 0;
  }

  li {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const StyledPasswordInput = styled.input`
  width: 100%;
  padding: 14px 0;
  padding-left: 14px;
  border: 1px solid ${Colors.mountainBlue};
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 17px;
  ::placeholder {
    color: ${Colors.mountainBlue};
  }
  margin-bottom: 30px;
`;

export const ChangeMyPassword = (props: Props) => {
  return (
    <StyledChangeMyPasswordContainer>
      <StyledHeader>
        <h2 className="title">Change My Password</h2>
        <p className="info">
          Your online security is important. We have revised our password rules
          to enhance your security. Please update your password according to the
          following guidelines.
        </p>
      </StyledHeader>
      <StyledMainContent>
        <PasswordContainer>
          <StyledPasswordInput type="password" placeholder="Current Password" />
          <StyledPasswordInput type="password" placeholder="New Password" />
          <StyledPasswordInput
            type="password"
            placeholder="Confirm New Password"
          />
          <Button
            label="CHANGE PASSWORD"
            buttonType="primary"
            disabled={false}
            onClick={() => console.log("Change Password Clicked")}
          />
        </PasswordContainer>
        <PasswordRequirementsContainer>
          <p className="text">
            Your password must be at least 8 characters long and include at
            least 3 of the 4 elements:
          </p>
          <ul>
            <li>An uppercase letter</li>
            <li>A lowercase letter</li>
            <li>A number</li>
            <li>A special character</li>
          </ul>
          <p className="text">
            Passwords shouldn’t contain your name or username
          </p>
          <p className="text">The word 'password' is not permitted</p>
        </PasswordRequirementsContainer>
      </StyledMainContent>
    </StyledChangeMyPasswordContainer>
  );
};
