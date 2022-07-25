import styled from "styled-components";
import { Colors } from "styles/colors";

import { VscChromeClose } from "react-icons/vsc";
import Button from "components/Button";
import { Flex } from "components/DoctorInfoCard/DoctorInfoCard";
import { useEffect, useState } from "react";
import { emailValidation } from "utils/emailValidation/emailValidator";
import { BREAK_POINTS } from "const/breakpoints";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledSpecialOfferModalContainer = styled.div`
  background-color: ${Colors.white};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  padding-bottom: 40px;

  ${BREAK_POINTS.mobile} {
    width: 95%;
  }
`;

const TopBanner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 5px 0;
  background-color: ${Colors.mountainBlue};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: "Oswald";
  font-size: 18px;
  color: ${Colors.white};
  text-transform: uppercase;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 10px;
  .closeBtn {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalTextContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    margin: 0;
    color: ${Colors.mountainBlue};
    font-family: "Open Sans";
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
  }
`;

const InputContainer = styled(Flex)`
  box-sizing: border-box;
  width: 80%;

  ${BREAK_POINTS.tablet} {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 0;
  padding-left: 14px;
  border: 1px solid ${Colors.mountainBlue};
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 17px;
  ::placeholder {
    color: ${Colors.mountainBlue};
  }

  ${BREAK_POINTS.tablet} {
    padding: 10px 0;
    padding-left: 14px;
    margin-bottom: 5px;
  }
`;

const SubscribeBtn = styled(Button)`
  min-width: 20%;
`;

const ModalErrorMessage = styled.div`
  margin-top: 10px;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding-left: 27px;
  color: ${Colors.errorRed};

  p {
    margin: 0;
    text-align: left;
  }
`;

export const SpecialOfferModal = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    if (emailValidation(email).isValid) {
      setIsOpen(false);
    } else {
      setIsValidEmail(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);
  }, []);

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <StyledSpecialOfferModalContainer>
            <TopBanner>
              <Title>VSP Special Offers</Title>
              <CloseBtn onClick={() => setIsOpen(false)}>
                <VscChromeClose
                  className="closeBtn"
                  color={Colors.white}
                  size="17"
                />
              </CloseBtn>
            </TopBanner>
            <ContentContainer>
              <ModalTextContainer>
                <p>
                  Eyewear and eye care Special Offers are available at all VSP
                  network doctor locations. Save on so much more—like wellness
                  and nutrition, leisure and travel, family entertainment, and
                  financial services to help bring you peace of mind.
                </p>
              </ModalTextContainer>

              <InputContainer>
                <StyledInput
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SubscribeBtn
                  label="SUBSCRIBE"
                  buttonType="primary"
                  onClick={() => handleModal()}
                />
              </InputContainer>
              {isValidEmail && (
                <ModalErrorMessage>
                  <p>{emailValidation(email).error}</p>
                </ModalErrorMessage>
              )}
            </ContentContainer>
          </StyledSpecialOfferModalContainer>
        </ModalContainer>
      )}
    </>
  );
};
