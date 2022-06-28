import styled from "styled-components";

type Props = {
  label: string;
  buttonType: string;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonStyled = styled.button<Pick<Props, "disabled" | "buttonType">>`
  padding: 8px 20px;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid #003046;
  transition: 0.2s ease-in-out;
  font-size: small;
  font-weight: 600;

  ${({ buttonType, disabled }) => {
    // Primary Btn
    if (buttonType === "primary" && !disabled) {
      return `color: white; background-color: #003046};  &:hover {background: #0169B4; border: 2px solid #0169B4}`;
    } else if (buttonType === "primary" && disabled) {
      return "color: white; background-color: #9EA1A4; border: 2px solid #9EA1A4";
    }

    // Secondary Btn
    if (buttonType === "secondary" && !disabled) {
      return `color: #003046; background-color: transparent; &:hover {color: #0169B4; border: 2px solid #0169B4};`;
    } else if (buttonType === "secondary" && disabled) {
      return "color: white; background-color: #9EA1A4; border: 2px solid #9EA1A4";
    }

    // Tertiary Btn
    if (buttonType === "tertiary" && !disabled) {
      return `color: #003046; background-color: #9FCC3A; border: 2px solid #9FCC3A; &:hover {color: white; background-color: #0169B4; border: 2px solid #0169B4};`;
    } else if (buttonType === "tertiary" && disabled) {
      return "color: white; background-color: #9EA1A4; border: 2px solid #9EA1A4";
    }
  }};
`;
// background-color: ${({ disabled }) => (disabled ? "#9EA1A4" : "#003046")};";

export const Button = ({ label, onClick, buttonType, disabled }: Props) => {
  return (
    <ButtonStyled buttonType={buttonType} disabled={disabled} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
