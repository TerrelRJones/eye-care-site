import Styled from "styled-components";
import { Colors } from "styles/colors";

import { ReactComponent as VSPLogo } from "assets/images/vsp_logo_secondary.svg";
import { FooterLinks } from "const/FooterLinks";

const StyledFooter = Styled.footer`
    background-color: ${Colors.mountainBlue};
    width: 100%;
`;

const FooterContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 64px 0;
`;

const FooterCardContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: 576px){
      display: grid;
      grid-template-columns: repeat(2, 1fr) ;
      padding: 10px;

    }

`;

const FooterCard = Styled.div`
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

const Link = Styled.a`
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${Colors.white};
        font-family: "Open Sans";
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 20px;
        margin-bottom: 8px;
        text-transform: capitalize;

        img {
        width: 1rem;
        margin-right: 5px;
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

    .logo {
      margin-right: 10px;
    }

    p {
      margin-right: 5px;
    }

  @media(max-width: 576px){
    flex-direction: column;
    align-items: center;
  }
    
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterCardContainer>
          {FooterLinks.map(({ title, links }: any) => (
            <FooterCard>
              <div className="title">{title}</div>
              {links.map(({ text, url, image, alt }: any) => (
                <div className="links">
                  <Link href={url} target="_blank">
                    {image ? <img src={image} alt={alt} /> : null}
                    {text}
                  </Link>
                </div>
              ))}
            </FooterCard>
          ))}
        </FooterCardContainer>
        <LogoContainer>
          <div className="logo">
            <VSPLogo />
          </div>
          <p>© 2018 Vision Service Plan.</p>
          <p>All rights reserved.</p>
        </LogoContainer>
      </FooterContainer>
    </StyledFooter>
  );
};
