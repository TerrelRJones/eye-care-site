import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "styles/colors";
import { BREAK_POINTS } from "const/breakpoints";

import VSP_LOGO from "assets/images/vsp_logo_secondary.svg";
import { FooterLink, FOOTER_LINKS } from "const/FooterLinks";
import Link from "components/Link";

const StyledFooter = styled.footer`
  background-color: ${Colors.mountainBlue};
  width: 100%;
  margin-top: auto;
  padding-bottom: 64px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-top: 57px;

  @media (max-width: 576px) {
    padding-top: 44px;
  }
`;

const FooterCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${BREAK_POINTS.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
  }
`;

const FooterCard = styled.div`
  padding: 10px;

  .links {
    display: flex;
    flex-direction: column;
  }
`;

const LinkTitle = styled.h2`
  color: ${Colors.white};
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 25px;
  margin-bottom: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: ${Colors.white};
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  padding: 0 16px;
  margin-top: 60px;

  img {
    margin-right: 10px;
    min-width: 90px;
    margin-bottom: 24px;
  }

  p {
    margin-right: 5px;
    font-size: 12px;
  }

  ${BREAK_POINTS.mobile} {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    p {
      line-height: 20px;
    }
  }
`;

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 576);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterCardContainer>
          {FOOTER_LINKS.map(({ title, abrvTitle, links }: FooterLink) => (
            <FooterCard key={title}>
              <LinkTitle className="title">
                {isMobile && abrvTitle ? abrvTitle : title}
              </LinkTitle>
              {links.map(({ text, url, image, alt }) => (
                <div key={text} className="links">
                  <Link url={url} text={text} image={image} alt={alt} />
                </div>
              ))}
            </FooterCard>
          ))}
        </FooterCardContainer>
        <LogoContainer>
          <img src={VSP_LOGO} alt="VSP Logo" />
          <p>&copy; 2018 Vision Service Plan.</p>
          <p>All rights reserved.</p>
        </LogoContainer>
      </FooterContainer>
    </StyledFooter>
  );
};
