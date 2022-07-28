import useIsMobile from "hooks/useIsMobile";
import { useEffect, useState, useMemo } from "react";

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

export const ChangeMyPassword = () => {
  const [currentPassword, setCurrentPassword] = useState<String>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isPasswordAccepted, setIsPasswordAccepted] = useState<boolean>(false);
  const [isMatchingPasswords, setIsMatchingPasswords] =
    useState<boolean>(false);
  const isMobile = useIsMobile();
  const userName = "tjones";

  const passwordValidationResult = useMemo(
    () => passwordValidation(newPassword, userName),
    [newPassword, userName]
  );

  const checkPasswordValidity = () => {
    const { isValid, errors } = passwordValidationResult;

    if (newPassword !== confirmNewPassword) {
      setIsPasswordAccepted(false);
      return setIsMatchingPasswords(true);
    }

    setIsMatchingPasswords(false);
    setIsPasswordAccepted(true);

    console.log(isValid, errors);
    console.log(currentPassword);
  };

  // checking passwords validity
  useEffect(() => {
    setIsPasswordValid(passwordValidation(newPassword, userName).isValid);
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
          {!isMobile && (
            <StyledPasswordButton
              label="CHANGE PASSWORD"
              buttonType="primary"
              disabled={!isPasswordValid}
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
            disabled={!isPasswordValid}
            onClick={checkPasswordValidity}
          />
        )}
      </StyledMainContent>
      <ErrorMessages>
        {!isPasswordValid &&
          passwordValidationResult.errors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
        {isMatchingPasswords && (
          <p>Passwords do not match. Please try again.</p>
        )}
        {isPasswordAccepted && (
          <p className="acceptedPass">Password Change Accepted</p>
        )}
      </ErrorMessages>
    </StyledChangeMyPasswordContainer>
  );
};
