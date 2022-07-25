import styled from "styled-components";
import { Colors } from "styles/colors";

import { VscChromeClose } from "react-icons/vsc";
import Button from "components/Button";
import { Flex } from "components/DoctorInfoCard/DoctorInfoCard";

const StyledNewsLetterModalContainer = styled.div`
  background-color: ${Colors.white};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  padding-bottom: 40px;
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
  font-family: "Open Sans";
  font-size: 14px;
  color: ${Colors.white};
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

const InputContainer = styled(Flex)`
  box-sizing: border-box;
  width: 80%;
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
`;

const SubscribeBtn = styled(Button)`
  min-width: 20%;
`;

export const NewsLetterModal = () => {
  return (
    <StyledNewsLetterModalContainer>
      <TopBanner>
        <Title>VSP Special Offers</Title>
        <CloseBtn>
          <VscChromeClose className="closeBtn" color={Colors.white} size="15" />
        </CloseBtn>
      </TopBanner>
      <ContentContainer>
        <p>
          Eyewear and eye care Special Offers are available at all VSP network
          doctor locations. Save on so much more—like wellness and nutrition,
          leisure and travel, family entertainment, and financial services to
          help bring you peace of mind.
        </p>
        <InputContainer>
          <StyledInput type="email" placeholder="Email" />
          <SubscribeBtn
            label="SUBSCRIBE"
            buttonType="primary"
            onClick={() => console.log("subbed")}
          />
        </InputContainer>
      </ContentContainer>
    </StyledNewsLetterModalContainer>
  );
};
