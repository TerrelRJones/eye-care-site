import Styled from "styled-components";

import Button from "../Button";

import { Colors } from "../../styles/colors";

type CardProps = {
  title: string;
  text: string;
  icon: SVGSVGElement;
  buttonLabel: string;
  buttonType: "primary" | "secondary" | "tertiary";
  disabled: boolean;
  btnIcon?: React.ReactNode;
  onClick: () => void;
};

// styling
const CardStyled = Styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 310px;
    background-color: ${Colors.white};

    
    .card-title {
        color: ${Colors.mountainBlue};
        font-family: 'Oswald';
        font-size: 22px;
        letter-spacing: 0;
        line-height: 24.2px;
        text-align: center;
        text-transform: Capitalize;
        margin-top: 25px;
    }

    .card-text {
        color: ${Colors.mountainBlue};
        /* font-family: ".SF NS Display"; */
        font-family: "Open Sans";
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
        text-align: center;
    }

    .button-container {
        position: absolute;
        bottom: 15px;
    }
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
      <div>{icon}</div>
      <div className="card__text-container">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{text}</p>
      </div>

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
