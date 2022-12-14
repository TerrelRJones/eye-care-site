import styled from "styled-components";
import { BREAK_POINTS } from "const/breakpoints";

import { Colors } from "styles/colors";

type CardContainerProps = {
  title: string;
  children: React.ReactNode;
};

const CardContainerStyled = styled.div`
  width: 100%;
  max-width: 1010px;
  margin-bottom: 100px;

  .card-container__title {
    color: ${Colors.mountainBlue};
    font-family: "Oswald";
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    letter-spacing: 0;
    line-height: 47px;
    text-align: center;
    margin-bottom: 60px;
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${BREAK_POINTS.tablet} {
      display: flex;
      flex-direction: column;
      padding: 0 16px;
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
