import useIsMobile from "hooks/useIsMobile";
import { useEffect, useState } from "react";

import { passwordValidation } from "utils/passwordValidation/passwordValidator";

import {
  StyledChangeMyPasswordContainer,
  StyledHeader,
  StyledMainContent,
  PasswordContainer,
  StyledPasswordInput,
  StyledPasswordButton,
  PasswordRequirementsContainer,
  ErrorMessages,
} from "./styles";

export interface ChangeMyPasswordProps {
  mobile: boolean;
}

export const ChangeMyPassword = () => {
  const [currentPassword, setCurrentPassword] = useState<String>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isMatchingPasswords, setIsMatchingPasswords] = useState<boolean>(true);
  const isMobile = useIsMobile();
  const userName = "tjones";

  const checkPasswordValidity = () => {
    const { isValid, errors } = passwordValidation(newPassword, userName);

    if (newPassword !== confirmNewPassword) {
      return setIsMatchingPasswords(!isMatchingPasswords);
    }

    setIsMatchingPasswords(true);
    console.log(isValid, errors);
    console.log(currentPassword);
    return isValid;
  };

  // checking passwords validity
  useEffect(() => {
    setIsPasswordValid(!passwordValidation(newPassword, userName).isValid);
  }, [newPassword]);

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
            required
            type="password"
            placeholder="Current Password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <StyledPasswordInput
            required
            type="password"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <StyledPasswordInput
            required
            type="password"
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          {isMobile || (
            <StyledPasswordButton
              label="CHANGE PASSWORD"
              buttonType="primary"
              disabled={isPasswordValid}
              onClick={checkPasswordValidity}
            />
          )}
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
        {isMobile && (
          <StyledPasswordButton
            label="CHANGE PASSWORD"
            buttonType="primary"
            disabled={isPasswordValid}
            onClick={checkPasswordValidity}
          />
        )}
      </StyledMainContent>
      <ErrorMessages>
        {isMatchingPasswords || (
          <p>Passwords do not match. Please try again.</p>
        )}
      </ErrorMessages>
    </StyledChangeMyPasswordContainer>
  );
};
