import { BREAK_POINTS } from "const/breakpoints";
import styled from "styled-components";
import { Colors } from "styles/colors";
import Button from "components/Button";

export const StyledChangeMyPasswordContainer = styled.div`
  max-width: 570px;
  width: 100%;
  background-color: ${Colors.white};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  height: 100%;

  ${BREAK_POINTS.mobile} {
    position: relative;
    box-sizing: border-box;
    box-shadow: none;
    padding: 0 14px;
  }
`;

export const StyledHeader = styled.div`
  padding-left: 27px;
  padding-top: 30px;
  .title {
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 24px;
    margin: 0;
    color: ${Colors.mountainBlue};
  }

  .info {
    font-family: "Open Sans";
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
    margin: 0;
    padding-top: 10px;
    padding-right: 35px;
    font-weight: 300;
    color: ${Colors.articleBlack};
  }

  ${BREAK_POINTS.mobile} {
    padding: 0;

    .info {
      padding-right: 0;
      margin-bottom: 30px;
    }
  }
`;

export const StyledMainContent = styled.div`
  display: flex;
  max-height: 280px;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 27px;
  padding-top: 20px;

  ${BREAK_POINTS.mobile} {
    flex-direction: column;
    max-height: 100%; // <-- container height now grows
    padding: 0;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 227px;
  width: 100%;
  max-height: 280px;
  height: 100%;

  ${BREAK_POINTS.mobile} {
    max-width: 100%;
  }
`;

export const PasswordRequirementsContainer = styled.div`
  box-sizing: border-box;
  max-width: 240px;
  width: 100%;
  color: ${Colors.mountainBlue};
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;

  .text {
    margin: 0;
    padding-bottom: 10px;
  }

  .bulletText {
    margin: 0;
    padding-bottom: 10px;
  }

  ${BREAK_POINTS.mobile} {
    max-width: 100%;
  }
`;

export const StyledPasswordInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 14px 0;
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
  margin-bottom: 30px;
`;

export const StyledPasswordButton = styled(Button)`
  min-width: 100%;

  ${BREAK_POINTS.mobile} {
    margin-top: 20px;
  }
`;

export const ErrorMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans";
  min-height: 67px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding-left: 27px;
  color: ${Colors.errorRed};

  p {
    margin: 0;
  }

  ${BREAK_POINTS.mobile} {
    padding-top: 10px;
    padding-left: 0;
    min-height: 20px;
  }
`;
