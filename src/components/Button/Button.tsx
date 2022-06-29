import styled from "styled-components";
import { Colors } from "../../../src/styles/colors";

type Props = {
  label: string;
  buttonType: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonStyled = styled.button<Pick<Props, "disabled" | "buttonType">>`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid ${Colors.mountainBlue};
  transition: 0.2s ease-in-out;
  font-size: small;
  font-weight: 600;

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
}: Props) => {
  return (
    <ButtonStyled buttonType={buttonType} disabled={disabled} onClick={onClick}>
      {label}
      <div className="icon">{icon}</div>
    </ButtonStyled>
  );
};
