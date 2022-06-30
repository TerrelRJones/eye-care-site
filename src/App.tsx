import styled, { createGlobalStyle } from "styled-components";

import CardContainer from "./components/CardContainer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 25vh;
  max-width: 1440px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <CardContainer />
      </Container>
    </>
  );
}

export default App;
