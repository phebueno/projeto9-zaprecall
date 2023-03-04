import styled from "styled-components";
import seta from "../assets/seta_play.png"
import certo from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import erro from "../assets/icone_erro.png"

export default function PerguntaCover({index, mudaFase, cardAtualFase, resultadoObtido}) {
  //O ícone é controlado a partir do estado do resultadoObtido, que indica valores abaixo:
  const imagem = {'seta':{'src':seta,'dataTest':"play-btn"},
  'certo':{'src':certo,'dataTest':"zap-icon"},
  'quase':{'src':quase,'dataTest':"partial-icon"},
  'erro':{'src':erro,'dataTest':"no-icon"}};

  return (
    <PerguntaCoverBox data-test="flashcard" cardAtualFase={cardAtualFase} resultadoObtido={resultadoObtido} >
      <p data-test="flashcard-text" >Pergunta {index+1}</p>
      {/* DEFINE SE USA A IMAGEM DE SETA, OU ALGUMA DAS OUTRAS TRÊS OPÇÕES */}
      {cardAtualFase===0 ? <img data-test={imagem['seta'].dataTest} src={imagem['seta'].src} alt="Seta" onClick={()=>mudaFase(index)}  /> : <img data-test={imagem[resultadoObtido].dataTest} src={imagem[resultadoObtido].src} alt={resultadoObtido} />}
    </PerguntaCoverBox>
  );
}
//Troca a cor de acordo com o botão clicado anteriormente em Resposta
const mudarCor = cor =>{
  switch (cor) {
    case 'certo':
      return "#2FBE34";
    case 'erro':
      return "#FF3030";
    case 'quase':
      return "#FF922E";
    default:
      return "#333333";
  }
};

const PerguntaCoverBox = styled.div`
    //Renomear este container de acordo com mudanças
    width: 300px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    text-decoration: ${(props=> props.cardAtualFase === 0 ? "none" : "line-through")};
    text-decoration-thickness: 3px;
    text-decoration-color: ${({resultadoObtido}) => mudarCor(resultadoObtido)};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 15px;
    box-sizing: border-box;
    p {
      font-family: "Recursive", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color:${({resultadoObtido}) => mudarCor(resultadoObtido)};
      //color: #333333;
    }
    img {
      cursor:${(props=> props.cardAtualFase === 0 ? "pointer" : "default")};
      width: 20px;
      height: 20px;
    }
`;
