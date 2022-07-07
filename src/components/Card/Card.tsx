import styled from "styled-components";

import Button from "components/Button";

import { Colors } from "styles/colors";

type CardProps = {
  title: string;
  text: string;
  icon: React.ReactElement;
  buttonLabel: string;
  buttonType: string;
  disabled: boolean;
  btnIcon?: React.ReactNode;
  onClick: () => void;
};

// styling
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 310px;
  min-height: 400px;
  background-color: ${Colors.white};

  @media (max-width: 576px) {
    height: 100%;
    width: 90%;

    .button-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-title {
    color: ${Colors.mountainBlue};
    font-family: "Oswald";
    font-size: 22px;
    font-weight: "600";
    letter-spacing: 0;
    line-height: 24.2px;
    text-align: center;
    text-transform: capitalize;
  }
`;

const Icon = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${Colors.mountainBlue};
  font-family: "Open Sans";
  font-size: 0.9em;
  font-weight: "600";
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
`;

export const Card = ({
  title,
  text,
  icon,
  buttonType,
  buttonLabel,
  disabled,
  onClick,
  btnIcon,
}: CardProps) => {
  return (
    <CardStyled>
      <CardContainer>
        <Icon>{icon}</Icon>
        <h1 className="card-title">{title}</h1>
        <Text>{text}</Text>
      </CardContainer>

      <div className="button-container">
        <Button
          buttonType={buttonType}
          label={buttonLabel}
          icon={btnIcon}
          disabled={disabled}
          onClick={onClick}
        />
      </div>
    </CardStyled>
  );
};
