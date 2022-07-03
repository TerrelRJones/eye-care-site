import Styled from "styled-components";
import { Colors } from "styles/colors";

import VSPLogo from "assets/images/vsp_logo_secondary.png";

type Props = {};

const StyledFooter = Styled.footer`
    background-color: ${Colors.mountainBlue};
    width: 100vw;
    /* height: 458px; */
`;

const FooterContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    /* background-color: red; */
    
`;

const FooterCardContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
    /* display: grid;
    place-items: center;
    grid-template-columns: repeat(5, 1fr) ; */

    @media(max-width: 576px){
        flex-direction: column;
    }

`;

const FooterCard = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* background: green; */
    padding: 10px;

    .title {
        color: ${Colors.white};
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 25px;
        margin-bottom: 10px;
    }

    .links {
        display: flex;
        flex-direction: column;
    }
    `;

const LogoContainer = Styled.div`
    display: flex;
    align-items: baseline;
  color: ${Colors.white};
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 20px;
    
`;

const Link = Styled.a`
        text-decoration: none;
        color: ${Colors.white};
        font-family: "Open Sans";
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 20px;
        margin-bottom: 8px;
        text-transform: capitalize;
`;

export const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterCardContainer>
          <FooterCard>
            <div className="title">About</div>
            <div className="links">
              <Link href="/">About This Site</Link>
              <Link href="/">About VSP</Link>
              <Link href="/">Become A VSP Provider</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Frame Gallery</Link>
              <Link href="/">Site Map</Link>
            </div>
          </FooterCard>
          <FooterCard>
            <div className="title">Contact</div>
            <div className="links">
              <Link href="/">About This Site</Link>
              <Link href="/">About VSP</Link>
              <Link href="/">Become A VSP Provider</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Frame Gallery</Link>
              <Link href="/">Site Map</Link>
            </div>
          </FooterCard>
          <FooterCard>
            <div className="title">Legal and Privacy</div>
            <div className="links">
              <Link href="/">About This Site</Link>
              <Link href="/">Non-Discrimination Statement</Link>
              <Link href="/">Become A VSP Provider</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Frame Gallery</Link>
              <Link href="/">Site Map</Link>
            </div>
          </FooterCard>
          <FooterCard>
            <div className="title">About</div>
            <div className="links">
              <Link href="/">About This Site</Link>
              <Link href="/">About VSP</Link>
              <Link href="/">Become A VSP Provider</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Frame Gallery</Link>
              <Link href="/">Site Map</Link>
            </div>
          </FooterCard>
          <FooterCard>
            <div className="title">About</div>
            <div className="links">
              <Link href="/">About This Site</Link>
              <Link href="/">About VSP</Link>
              <Link href="/">Become A VSP Provider</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Frame Gallery</Link>
              <Link href="/">Site Map</Link>
            </div>
          </FooterCard>
        </FooterCardContainer>
        <LogoContainer>
          <img src={VSPLogo} alt="VSP Logo" />
          <p>© 2018 Vision Service Plan. All rights reserved.</p>
        </LogoContainer>
      </FooterContainer>
    </StyledFooter>
  );
};
