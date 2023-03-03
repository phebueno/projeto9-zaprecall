import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import logo from "./assets/logo.png";
import Header from "./components/Header";
import Contador from "./components/Contador";
import Main from "./components/Main";
import cards from "./constants/DeckPerguntas";
import { useState } from "react";

export default function App() {
  const [resultados, setResultados] = useState([...cards].fill(undefined));
  const [contadorRespostas, setContadorRespostas] = useState(0);
  return (
    <ContainerApp>
      <GlobalStyle />
      <Header logo={logo}/>
      <Main cards={cards} resultados={resultados} setResultados={setResultados} contadorRespostas={contadorRespostas} setContadorRespostas={setContadorRespostas}/>
      <Contador resultados={resultados} contadorRespostas={contadorRespostas}/>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  width: 375px;
  height: 100%;
`;