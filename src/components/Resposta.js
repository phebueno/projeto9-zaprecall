import styled from "styled-components";

export default function Resposta({ index, texto, mudaFase, pontuar }) {
  return (
    <RespostaBox data-test="flashcard">
      <p data-test="flashcard-text">{texto}</p>
      <div>
        <Botao data-test="no-btn" color={"#FF3030"} onClick={()=>pontuar(index, "erro")}>Não lembrei</Botao>
        <Botao data-test="partial-btn" color={"#FF922E"} onClick={()=>pontuar(index, "quase")}>Quase não lembrei</Botao>
        <Botao data-test="zap-btn" color={"#2FBE34"} onClick={()=>pontuar(index, "certo")}>Zap!</Botao>
      </div>
    </RespostaBox>
  );
}

const RespostaBox = styled.div`
  width: 300px;
  min-height: 131px;
  background-color: #ffffd4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 18px 15px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  gap:15px;
  p {
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  div{
    display:flex;
    justify-content: space-between;
  }
`;

const Botao = styled.button`
    cursor:pointer;
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    border:none;
    background-color: ${props => props.color};
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color:#FFFFFF;
`;
