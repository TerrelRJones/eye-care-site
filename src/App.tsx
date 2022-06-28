import styled from "styled-components";

import Button from "./components/Button";

import "./App.css";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 25vh;
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Button
        buttonType="primary"
        disabled={false}
        label="Primary CTA Button"
        onClick={() => console.log("Primary BTN")}
      />
      <Button
        buttonType="primary"
        disabled={true}
        label="Primary CTA Button"
        onClick={() => console.log("Primary BTN")}
      />
      <Button
        buttonType="secondary"
        disabled={false}
        label="Secondary Button"
        onClick={() => console.log("Secondary BTN")}
      />
      <Button
        buttonType="secondary"
        disabled={true}
        label="Secondary Button"
        onClick={() => console.log("Secondary BTN")}
      />
      <Button
        buttonType="tertiary"
        disabled={false}
        label="Tertiary Button"
        onClick={() => console.log("Tertiary BTN")}
      />
      <Button
        buttonType="tertiary"
        disabled={true}
        label="Tertiary Button"
        onClick={() => console.log("Tertiary BTN")}
      />
    </Container>
  );
}

export default App;
