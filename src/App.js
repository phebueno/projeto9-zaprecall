import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import logo from "./assets/logo.png";
import Header from "./components/Header";
import Contador from "./components/Contador";
import Main from "./components/Main";
import cards from "./constants/deckPerguntas";
import { useState } from "react";

export default function App() {
  const [resultados, setResultados] = useState([...cards].fill(undefined));
  const [contadorRespostas, setContadorRespostas] = useState(0);
  const [cardFase, setCardFase] = useState([...cards].fill(0)); //ESTADO 0 É O ESTADO DE INÍCIO
  const [resultadosOrdenados, setResultadosOrdenados] = useState([]);

function mudaFase(indiceCartao){
  let novaFase = [...cardFase];
  novaFase[indiceCartao] = novaFase[indiceCartao]+1; //próxima fase
  const limiteDeFases = 4; //ÚLTIMA FASE
  if (novaFase[indiceCartao]<limiteDeFases) setCardFase([...novaFase]);
}

function pontuar(index, id){
  let novoResultado = [...resultados];
  novoResultado[index] = id; //certo, quase ou erro
  setResultados([...novoResultado]); //array com index localizador da carta
  setResultadosOrdenados([...resultadosOrdenados,id])//array por ordem de resposta
  mudaFase(index);
  setContadorRespostas(contadorRespostas+1);
}

  return (
    <ContainerApp>
      <GlobalStyle />
      <Header logo={logo}/>
      <Main cards={cards} resultados={resultados} mudaFase={mudaFase} pontuar={pontuar} cardFase={cardFase}/>
      <Contador resultados={resultados} contadorRespostas={contadorRespostas} resultadosOrdenados={resultadosOrdenados}/>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  width: 375px;
  height: 100%;
`;