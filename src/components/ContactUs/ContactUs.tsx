import Styled from "styled-components";
import { Colors } from "styles/colors";

import BG_IMAGE from "assets/images/background_image.jpeg";
import Link from "components/Link";
import { ContactUsLinks } from "const/ContactUsLinks";

type ContactUsProps = {
  title: string;
  linksTitle: string;
};

const ContactUsStyled = Styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    margin-bottom: 40px;
    background-color: ${Colors.mountainBlue};

    .sections {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-wrap: wrap; */
        gap: 30px;

    }

    @media(max-width: 850px){
        flex-direction: column;
        background-color: ${Colors.white};
        margin-bottom: 0;
        gap: 0;


        .sections {
            flex-direction: column;
            position: static;
        }
    }
`;

const ContactUsContainer = Styled.div`
   
    width: 1200px;
    height: 350px;
    background-image: url(${BG_IMAGE});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;

    @media(max-width: 850px){
        width: 100%;
    }
`;

const LeftSection = Styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 669px;
    min-height: 208px;
    background-color: ${Colors.whiteOpacity};

    .test {
        display: flex;
        width: 80%;
    }

    @media(max-width: 850px){
        width: 100%;
    }
`;

const RightSection = Styled.section`
    display: flex;
    justify-content: center;
    min-width: 270px;
    min-height: 208px;
    background-color: ${Colors.whiteOpacity};

    @media(max-width: 850px){
        width: 100%;
    }
`;

const RightContent = Styled.div`
        display: flex;
        flex-direction: column;
        width: 80%;

    .title {
        color: ${Colors.mountainBlue}
        font-family: "Open Sans";
        font-size: 14px;
        letter-spacing: 0;
        line-height: 40px;
        margin-bottom: 20px;
    }

    .links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60%;
    }
`;

const VerticalDesignElement = Styled.div`
    box-sizing: border-box;
    height: 67px;
    width: 3px;
    border: 4px solid ${Colors.lime};
    margin-right: 20px;
`;

const Text = Styled.div`
    h1{
    color: ${Colors.mountainBlue};
    font-family: Oswald;
    font-size: 38px;
    letter-spacing: 0;
    line-height: 41.8px;
    margin: 0;
    }

    p{
    color: ${Colors.mountainBlue};
    font-family: "Open Sans";
    font-size: 16px;
    letter-spacing: 0;
    line-height: 25px; 
    }
`;

export const ContactUs = ({ title, linksTitle }: ContactUsProps) => {
  return (
    <ContactUsStyled>
      <ContactUsContainer />
      <div className="sections">
        <LeftSection>
          <div className="test">
            <VerticalDesignElement />
            <Text>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                bibendum la elementorci ligula, ornare vel mattis in at enim.
              </p>
            </Text>
          </div>
        </LeftSection>
        <RightSection>
          <RightContent>
            <div>
              <h3 className="title">{linksTitle}</h3>
            </div>
            <div className="links">
              {ContactUsLinks.map(({ title, url }: any) => (
                <Link
                  key={title}
                  url={url}
                  text={title}
                  color={Colors.icyBlue}
                  hoverColor={Colors.mountainBlue}
                />
              ))}
            </div>
          </RightContent>
        </RightSection>
      </div>
    </ContactUsStyled>
  );
};
