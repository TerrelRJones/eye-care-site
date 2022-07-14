import styled from "styled-components";
import { Colors } from "styles/colors";
import { BREAK_POINTS } from "const/breakPoints";

import BG_IMAGE from "assets/images/background_image.jpeg";
import Link from "components/Link";

import { CONTACT_US_LINKS } from "const/ContactUsLinks";

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

  ${BREAK_POINTS.tablet} {
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

  ${BREAK_POINTS.tablet} {
    flex-direction: column;
    position: static;
    width: 100%;
    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.3),
      0 0 16px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 60px;
    gap: 0;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  min-height: 348px;
  background-image: url(${BG_IMAGE});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${BREAK_POINTS.mobile} {
    min-height: 164px;
  }
`;

const LeftSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 669px;
  min-height: 208px;
  background-color: ${Colors.whiteOpacity};

  ${BREAK_POINTS.tablet} {
    min-height: 0;
    padding-top: 20px;
  }
`;

const LeftSectionContainer = styled.div`
  display: flex;
  margin-left: 52.5px;

  ${BREAK_POINTS.tablet} {
    padding: 0 16px;
    margin-left: 0;
    width: 100%;
  }
`;

const RightSection = styled.section`
  display: flex;
  justify-content: center;
  min-width: 270px;
  min-height: 208px;
  background-color: ${Colors.whiteOpacity};

  ${BREAK_POINTS.tablet} {
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
  border: 2px solid ${Colors.lime};
  margin-right: 20px;

  ${BREAK_POINTS.tablet} {
    margin-right: 9px;
    max-height: 74px;
    max-width: 3px;
    border: 2px solid ${Colors.lime};
  }
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
    margin: 0;
    max-width: 600px;
    padding-right: 133px;
  }

  ${BREAK_POINTS.mobile} {
    h1 {
      font-size: 26;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0;
      padding-right: 0;
    }
  }
`;

export const ContactUs = ({ title, linksTitle }: ContactUsProps) => {
  return (
    <ContactUsStyled>
      <BackgroundImage />
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
              {CONTACT_US_LINKS.map(({ title, url }) => (
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
