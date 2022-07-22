import Button from "components/Button";
import { BREAK_POINTS } from "const/breakpoints";
import { useState } from "react";
import styled from "styled-components";
import { Colors } from "styles/colors";

import { passwordValidation } from "utils/passwordValidation/passwordValidator";

type Props = {};

const StyledChangeMyPasswordContainer = styled.div`
  max-width: 570px;
  width: 100%;
  background-color: ${Colors.white};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  height: 100%;

  ${BREAK_POINTS.mobile} {
    position: relative;
    height: 680px;
    box-sizing: border-box;
    box-shadow: none;
    padding: 0 14px;
  }
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

  ${BREAK_POINTS.mobile} {
    padding: 0;

    .info {
      padding-right: 0;
      margin-bottom: 30px;
    }
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  max-height: 280px;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 27px;
  padding-top: 20px;

  ${BREAK_POINTS.mobile} {
    flex-direction: column;
    padding: 0;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 227px;
  width: 100%;
  max-height: 280px;
  height: 100%;

  ${BREAK_POINTS.mobile} {
    max-width: 100%;
  }
`;

const PasswordRequirementsContainer = styled.div`
  box-sizing: border-box;
  max-width: 240px;
  width: 100%;
  color: ${Colors.mountainBlue};
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;

  .text {
    margin: 0;
    padding-bottom: 10px;
  }

  .bulletText {
    margin: 0;
    padding-bottom: 10px;
  }

  ${BREAK_POINTS.mobile} {
    max-width: 100%;
  }
`;

const StyledPasswordInput = styled.input`
  box-sizing: border-box;
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

const StyledPasswordButton = styled(Button)`
  min-width: 100%;

  ${BREAK_POINTS.mobile} {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const ErrorMessages = styled.div`
  font-family: "Open Sans";
  min-height: 67px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding-left: 27px;
  color: red;

  p {
    margin: 0;
  }
`;

export const ChangeMyPassword = (props: Props) => {
  const [currentPassword, setCurrentPassword] = useState<String>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isMatchingPasswords, setIsMatchingPasswords] = useState<boolean>(true);
  const userName = "tjones";

  const checkPasswordValidity = () => {
    const { isValid, errors } = passwordValidation(newPassword, userName);
    if (newPassword !== confirmNewPassword) {
      return setIsMatchingPasswords(!isMatchingPasswords);
    }

    setIsMatchingPasswords(true);
    console.log(isValid, errors);
    console.log(currentPassword);
    return;
  };

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
          <StyledPasswordInput
            type="password"
            placeholder="Current Password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <StyledPasswordInput
            type="password"
            placeholder="New Password"
            onChange={(e) => [
              setNewPassword(e.target.value),
              setIsPasswordValid(
                !passwordValidation(newPassword, userName).isValid
              ),
            ]}
          />
          <StyledPasswordInput
            type="password"
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <StyledPasswordButton
            label="CHANGE PASSWORD"
            buttonType="primary"
            disabled={isPasswordValid}
            onClick={checkPasswordValidity}
          />
        </PasswordContainer>
        <PasswordRequirementsContainer>
          <p className="text">
            Your password must be at least 8 characters long and include at
            least 3 of the 4 elements:
          </p>
          <p className="bulletText">&bull; An uppercase letter</p>
          <p className="bulletText">&bull; A lowercase letter</p>
          <p className="bulletText">&bull; A number</p>
          <p className="bulletText">&bull; A special character</p>
          <p className="text">
            Passwords shouldn’t contain your name or username
          </p>
          <p className="text">The word 'password' is not permitted</p>
        </PasswordRequirementsContainer>
      </StyledMainContent>
      <ErrorMessages>
        {isMatchingPasswords || <p>Passwords do not match. Try again.</p>}
      </ErrorMessages>
    </StyledChangeMyPasswordContainer>
  );
};
