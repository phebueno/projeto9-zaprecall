import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import logo from "./assets/logo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import cards from "./constants/DeckPerguntas";

export default function App() {
  return (
    <ContainerApp>
      <GlobalStyle />
      <Header logo={logo}/>
      <Main cards={cards}/>
      <Footer>0/4 CONCLUÍDOS</Footer>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  width: 375px;
  height: 100%;
`;