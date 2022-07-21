import styled from "styled-components";
import { Colors } from "styles/colors";

import { BREAK_POINTS } from "const/breakpoints";

export type ButtonType = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
  label: string;
  buttonType: ButtonType;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
};

const ButtonStyled = styled.button<
  Pick<ButtonProps, "disabled" | "buttonType">
>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 240px;
  text-transform: uppercase;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
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
    if (buttonType === "primary") {
      return disabled
        ? `color: ${Colors.white}; background-color: ${Colors.matteGray}; border: 2px solid ${Colors.matteGray}`
        : `color: ${Colors.white}; background-color: ${Colors.mountainBlue}};  &:hover {background: ${Colors.icyBlue}; border: 2px solid ${Colors.icyBlue}}`;
    }

    // Secondary Btn
    if (buttonType === "secondary") {
      return disabled
        ? `color: ${Colors.white}; background-color: ${Colors.matteGray}; border: 2px solid ${Colors.matteGray}`
        : `color: ${Colors.mountainBlue}; background-color: transparent; &:hover {color: ${Colors.icyBlue}; border: 2px solid ${Colors.icyBlue}};`;
    }

    // Tertiary Btn
    if (buttonType === "tertiary") {
      return disabled
        ? `color: ${Colors.white}; background-color: ${Colors.matteGray}; border: 2px solid ${Colors.matteGray}`
        : `color: ${Colors.mountainBlue}; background-color: ${Colors.lime}; border: 2px solid ${Colors.lime}; &:hover {color: ${Colors.white}; background-color: ${Colors.icyBlue}; border: 2px solid ${Colors.icyBlue}};`;
    }
  }};

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }

  ${BREAK_POINTS.tablet} {
    width: 100%;
  }
`;

export const Button = ({
  label,
  buttonType,
  icon,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <ButtonStyled
      className={className}
      buttonType={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
      {icon && <div className="icon">{icon}</div>}
    </ButtonStyled>
  );
};
