import styled from "styled-components";

export default function PerguntaCover({index, imagem, mudaFase, cardAtualFase, resultadoObtido}) {
  
  return (
    <PerguntaCoverBox onClick={()=>mudaFase(index)} cardAtualFase={cardAtualFase} resultadoObtido={resultadoObtido} >
      <p>Pergunta {index+1} {resultadoObtido}</p>
      {/* DEFINE SE USA A IMAGEM DE SETA, OU ALGUMA DAS OUTRAS TRÊS OPÇÕES */}
      {cardAtualFase===0 ? <img src={imagem['seta']} alt="Seta" /> : <img src={imagem[resultadoObtido]} alt={resultadoObtido} />}
    </PerguntaCoverBox>
  );
}

const mudarCor = cor =>{
  switch (cor.resultadoObtido) {
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
    text-decoration-color: #333333;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 15px;
    box-sizing: border-box;
    p {
      font-family: "Recursive", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color:${(props) => mudarCor(props)};
      //color: #333333;
    }
    img {
      width: 20px;
      height: 20px;
    }
`;
