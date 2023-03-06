import styled from "styled-components";
import Pergunta from "./Pergunta";
import PerguntaCover from "./PerguntaCover";
import Resposta from "./Resposta";

export default function Main({
  cards,
  resultados,
  mudaFase,
  pontuar,
  cardFase,
}) {
  const layout = [];

  //Cria os divs contendo a carta, dependendo do estado
  cards.forEach((card, index) => {
    if (cardFase[index] === 0 || cardFase[index] === 3) {
      //Se não for no estado de pergunta exposta
      layout.push(
        <PerguntaCover
          key={index}
          index={index}
          mudaFase={mudaFase}
          cardAtualFase={cardFase[index]}
          resultadoObtido={resultados[index]}
        />
      );
    }
    if (cardFase[index] === 1) {
      //PERGUNTA
      layout.push(
        <Pergunta
          key={index}
          index={index}
          texto={cards[index].question}
          mudaFase={mudaFase}
        />
      );
    }
    if (cardFase[index] === 2) {
      //RESPOSTA
      layout.push(
        <Resposta
          key={index}
          index={index}
          texto={cards[index].answer}
          mudaFase={mudaFase}
          pontuar={pontuar}
        />
      );
    }
  });
  return <MainWrapper resultados={resultados}>{layout}</MainWrapper>;
}

const MainWrapper = styled.main`
  box-sizing: border-box;
  padding: 0 45px 116px;
  padding-bottom: ${(props) =>
    props.resultados.includes(undefined) ? "116px" : "217px"};
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fb6b6b;
  gap: 20px;
`;
