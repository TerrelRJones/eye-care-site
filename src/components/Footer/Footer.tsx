import styled from "styled-components";
import { Colors } from "styles/colors";

import { ReactComponent as VSPLogo } from "assets/images/vsp_logo_secondary.svg";
import { FooterLink, FOOTER_LINKS } from "const/FooterLinks";
import Link from "components/Link";

const StyledFooter = styled.footer`
  background-color: ${Colors.mountainBlue};
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 64px 0;
`;

const FooterCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
  }
`;

const FooterCard = styled.div`
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

const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: ${Colors.white};
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 20px;

  .logo {
    margin-right: 10px;
  }

  p {
    margin-right: 5px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterCardContainer>
          {FOOTER_LINKS.map(({ title, links }: FooterLink) => (
            <FooterCard>
              <div className="title">{title}</div>
              {links.map(({ text, url, image, alt }) => (
                <div className="links">
                  <Link url={url} text={text} image={image} alt={alt} />
                </div>
              ))}
            </FooterCard>
          ))}
        </FooterCardContainer>
        <LogoContainer>
          <div className="logo">
            <VSPLogo />
          </div>
          <p>&copy; 2018 Vision Service Plan.</p>
          <p>All rights reserved.</p>
        </LogoContainer>
      </FooterContainer>
    </StyledFooter>
  );
};
