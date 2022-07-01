import Styled from "styled-components";
import { Card } from "../Card/Card";
import { HeartIcon, PinLightIcon, CardIcon } from "../../assets/icons/Icons";
import { Colors } from "../../styles/colors";

type CardContainerProps = {
  title: string;
};

const CardContainerStyled = Styled.div`
  /* background-color: red; */
  /* height: 435px; */
  width: 1010px;

  .card-container__title {
    height: 47px;
    /* width: 483px; */
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

  .vsp-benefits-are-eas {

}

  .card-container {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr) ;
  }
`;

export const CardContainer = ({ title }: CardContainerProps) => {
  return (
    <CardContainerStyled>
      <div className="card-container__title">{title}</div>
      <div className="card-container">
        <Card
          title="Review your benefits"
          text="Review your benefits with VSP network doctors"
          icon={<HeartIcon />}
          buttonType="primary"
          buttonLabel="View Benefits"
          disabled={false}
        />
        <Card
          title="Find A Doctor"
          text="Find a doctor on the VSP network to take advantage of exclusive memter-only savings and maximize your benefit."
          icon={<PinLightIcon />}
          buttonType="primary"
          buttonLabel="Find A Doctor"
          disabled={false}
        />
        <Card
          title="Member ID Card"
          text="There’s no ID card necessary. If you’d like a card as a reference, you can print your Member Vision Card."
          icon={<CardIcon />}
          buttonType="primary"
          buttonLabel="View Member ID Card"
          disabled={false}
        />
      </div>
    </CardContainerStyled>
  );
};
