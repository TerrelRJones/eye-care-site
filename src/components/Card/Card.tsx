import styled from "styled-components";
import { BREAK_POINTS } from "const/breakPoints";

import Button from "components/Button";
import { ButtonType } from "components/Button/Button";

import { Colors } from "styles/colors";

export type CardProps = {
  title: string;
  text: string;
  icon: React.ReactElement;
  buttonLabel: string;
  buttonType: ButtonType;
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
  min-height: 288px;
  background-color: ${Colors.white};

  ${BREAK_POINTS.tablet} {
    margin-bottom: 60px;

    .button-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  ${BREAK_POINTS.mobile} {
    max-width: 100%;
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
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24.2px;
    text-align: center;
    text-transform: capitalize;
  }
`;

const Icon = styled.div`
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
  padding: 10px;
  margin: 0;
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
