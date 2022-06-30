import styled from "styled-components";
import { Colors } from "../../../src/styles/colors";

export type ButtonProps = {
  label: string;
  buttonType: "primary" | "secondary" | "tertiary";
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonStyled = styled.button<
  Pick<ButtonProps, "disabled" | "buttonType">
>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 240px;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid ${Colors.mountainBlue};
  transition: 0.2s ease-in-out;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 19px;
  text-align: center;
  font-family: "Open Sans", sans-serif;

  ${({ buttonType, disabled }) => {
    // Primary Btn
    if (buttonType === "primary" && !disabled) {
      return `color: ${Colors.white}; background-color: ${Colors.mountainBlue}};  &:hover {background: ${Colors.icyBlue}; border: 2px solid ${Colors.icyBlue}}`;
    } else if (buttonType === "primary" && disabled) {
      return `color: ${Colors.white}; background-color: ${Colors.matteGray}; border: 2px solid ${Colors.matteGray}`;
    }

    // Secondary Btn
    if (buttonType === "secondary" && !disabled) {
      return `color: ${Colors.mountainBlue}; background-color: transparent; &:hover {color: ${Colors.icyBlue}; border: 2px solid ${Colors.icyBlue}};`;
    } else if (buttonType === "secondary" && disabled) {
      return `color: ${Colors.white}; background-color: ${Colors.matteGray}; border: 2px solid ${Colors.matteGray}`;
    }

    // Tertiary Btn
    if (buttonType === "tertiary" && !disabled) {
      return `color: ${Colors.mountainBlue}; background-color: ${Colors.lime}; border: 2px solid ${Colors.lime}; &:hover {color: ${Colors.white}; background-color: ${Colors.icyBlue}; border: 2px solid ${Colors.icyBlue}};`;
    } else if (buttonType === "tertiary" && disabled) {
      return `color: ${Colors.white}; background-color: ${Colors.matteGray}; border: 2px solid ${Colors.matteGray}`;
    }
  }};

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
`;

export const Button = ({
  label,
  buttonType,
  icon,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled buttonType={buttonType} disabled={disabled} onClick={onClick}>
      {label}
      <div className="icon">{icon}</div>
    </ButtonStyled>
  );
};
