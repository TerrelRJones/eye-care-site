import styled from "styled-components";
import { Colors } from "styles/colors";

import BG_IMAGE from "assets/images/background_image.jpeg";
import Link from "components/Link";
import { ContactUsLinks } from "const/ContactUsLinks";

type ContactUsProps = {
  title: string;
  linksTitle: string;
};

const ContactUsStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  background-color: ${Colors.mountainBlue};

  @media (max-width: 850px) {
    flex-direction: column;
    background-color: ${Colors.white};
    margin-bottom: 0;
    gap: 0;
  }
`;

const ContentSectionStyledContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 850px) {
    flex-direction: column;
    position: static;
    width: 100%;
    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.3),
      0 0 16px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 60px;
    gap: 0;
  }
`;

const ContactUsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 350px;
  background-image: url(${BG_IMAGE});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const LeftSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 669px;
  min-height: 208px;
  background-color: ${Colors.whiteOpacity};
`;

const LeftSectionContainer = styled.div`
  display: flex;
  padding: 0 16px;
`;

const RightSection = styled.section`
  display: flex;
  justify-content: center;
  min-width: 270px;
  min-height: 208px;
  background-color: ${Colors.whiteOpacity};

  @media (max-width: 850px) {
    width: 100%;
    max-width: 669px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;

  .title {
    color: ${Colors.mountainBlue};
    font-family: "Open Sans";
    font-weight: 800;
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

const VerticalDesignElement = styled.div`
  box-sizing: border-box;
  max-height: 67px;
  max-width: 3px;
  border: 4px solid ${Colors.lime};
  margin-right: 20px;
`;

const Text = styled.div`
  h1 {
    color: ${Colors.mountainBlue};
    font-family: Oswald;
    font-weight: 400;
    font-size: 38px;
    letter-spacing: 0;
    line-height: 41.8px;
    margin: 0;
  }

  p {
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
      <ContentSectionStyledContainer>
        <LeftSection>
          <LeftSectionContainer>
            <VerticalDesignElement />
            <Text>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                bibendum la elementorci ligula, ornare vel mattis in at enim.
              </p>
            </Text>
          </LeftSectionContainer>
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
      </ContentSectionStyledContainer>
    </ContactUsStyled>
  );
};
