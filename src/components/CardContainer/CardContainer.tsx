import Styled from "styled-components";

import { Colors } from "styles/colors";

type CardContainerProps = {
  title: string;
  children: React.ReactNode;
};

const CardContainerStyled = Styled.div`
    width: 100%;
    max-width: 1010px;
  margin-bottom: 100px;


  .card-container__title {
    color: ${Colors.mountainBlue};
    font-family: 'Oswald';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    letter-spacing: 0;
    line-height: 47px;
    text-align: center;
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    /* display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr) ; */

    @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
  } 
`;

export const CardContainer = ({ title, children }: CardContainerProps) => {
  return (
    <CardContainerStyled>
      <div className="card-container__title">{title}</div>
      <div className="card-container">{children}</div>
    </CardContainerStyled>
  );
};
