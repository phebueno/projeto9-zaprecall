import { useState } from "react";
import styled from "styled-components";
import Pergunta from "./Pergunta";
import PerguntaCover from "./PerguntaCover";
import Resposta from "./Resposta";
import seta from "../assets/seta_play.png"
import certo from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import erro from "../assets/icone_erro.png"

export default function Main({ cards, resultados, setResultados, contadorRespostas, setContadorRespostas }) {
    
  const layout = [];
  const [cardFase, setCardFase] = useState([...cards].fill(0)); //ESTADO 0 É O ESTADO DE INÍCIO
  //const [imagem,setImagem] = useState(seta);
  const imagem = {'seta':seta,
  'certo':certo,
  'quase':quase,
  'erro':erro};

    function mudaFase(indiceCartao){
        let novaFase = [...cardFase];
        novaFase[indiceCartao] = novaFase[indiceCartao]+1; //próxima fase
        const limiteDeFases = 4; //ÚLTIMA FASE
        if (novaFase[indiceCartao]<limiteDeFases) setCardFase([...novaFase]);
    }

    function pontuar(index, id){
      let novoResultado = [...resultados];
      novoResultado[index] = id; //certo, quase ou erro
      setResultados([...novoResultado]);
      mudaFase(index);
      setContadorRespostas(contadorRespostas+1);
    }

  cards.forEach((card, index) => {    
    if (cardFase[index]===0 || cardFase[index]===3){ //Se não for no estado de pergunta exposta
        layout.push(<PerguntaCover key={index} index={index} imagem={imagem} mudaFase={mudaFase}  cardAtualFase={cardFase[index]} resultadoObtido={resultados[index]}/>);
    }
    if (cardFase[index]===1){ //PERGUNTA
        layout.push(<Pergunta key={index} index={index} texto={cards[index].question} mudaFase={mudaFase} />);
    }
    if (cardFase[index]===2){ //RESPOSTA
        layout.push(<Resposta key={index} index={index} texto={cards[index].answer} mudaFase={mudaFase} pontuar={pontuar}/>);
    }
  })
  return (
    <MainWrapper>
      {layout}
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  box-sizing: border-box;
  padding: 0 45px 116px;
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fb6b6b;
  gap: 20px;  
`;
