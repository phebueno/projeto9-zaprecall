import setaVirar from "../assets/seta_virar.png"
import styled from "styled-components";

export default function Pergunta({index, texto, mudaFase}) {
    return (
      <PerguntaBox>
        <p data-test="flashcard-text" >{texto}</p>
        <img data-test="turn-btn" src={setaVirar} alt="setaVirar" onClick={()=>mudaFase(index)}/>
      </PerguntaBox>
    );
  }

  const PerguntaBox = styled.span`width: 300px;
  min-height: 131px;
  background-color: #FFFFD4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 18px 15px;
  position: relative;
  box-sizing: border-box;
  p {
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  img{
    cursor:pointer;
    width: 30px;
    height: 20px;
    position: absolute;
    bottom:18px;
    right:15px;
  }`