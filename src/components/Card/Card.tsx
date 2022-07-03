import Styled from "styled-components";

import Button from "../Button";

import { Colors } from "../../styles/colors";

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
const CardStyled = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    width: 310px;
    background-color: ${Colors.white};


    @media(max-width: 576px){
            height: 350px;
            width: 100%;

            .button-container{
              display: flex;
              justify-content: center;
              width: 100%;
            }
            }
`;

const CardContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  .card-title {
        color: ${Colors.mountainBlue};
        font-family: 'Oswald';
        font-size: 22px;
        font-weight: '600';
        letter-spacing: 0;
        line-height: 24.2px;
        text-align: center;
        text-transform: Capitalize;
    }
`;

const Icon = Styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
`;

const Text = Styled.div`
          color: ${Colors.mountainBlue};
        /* font-family: ".SF NS Display"; */
        font-family: "Open Sans";
        font-size: .9em;
        font-weight: '600';
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
