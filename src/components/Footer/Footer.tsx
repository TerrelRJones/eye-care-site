import Styled from "styled-components";
import { Colors } from "styles/colors";

type Props = {};

const FooterContainer = Styled.footer`
    background-color: ${Colors.mountainBlue};
    width: 100vw;
`;

const FooterCardContainer = Styled.div`
    background:red;
    max-width: 1440px;
    margin: 0 auto;
`;

export const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <FooterCardContainer>HI</FooterCardContainer>
    </FooterContainer>
  );
};
