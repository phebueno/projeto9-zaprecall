import styled from "styled-components";

export default function StartScreen({ logo, setRecallComecado, recallComecado }) {
  return (
    <StartContainer recallComecado={recallComecado}>
      <ContentContainer>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
        <button data-test="start-btn" onClick={()=>setRecallComecado(true)}>Iniciar Recall!</button>
      </ContentContainer>
    </StartContainer>
  );
}

const StartContainer = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #fb6b6b;
  display:${(props=> props.recallComecado ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:25px;
  img{
    width:136px;
    height:161px;
  }
  h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -0.012em;
    line-height: 45px;
    color: #ffffff;
  }
  button{
    cursor: pointer;
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #D70900;
  }
`;
