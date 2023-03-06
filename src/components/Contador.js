import imagem from "../constants/iconInfo";
import styled from "styled-components";
import partyImg from "../assets/party.png";
import sadImg from "../assets/sad.png";

export default function Contador({
  resultados,
  contadorRespostas,
  resultadosOrdenados,
}) {
  return (
    <FooterWrapper data-test="footer" resultados={resultados}>
      <ResultsBox data-test="finish-text" resultados={resultados}>
        {resultados.includes("erro") ? (
          <>
            <div>
              <img src={sadImg} alt={sadImg} />
              <p id="title">Putz...</p>
            </div>
            <p>Ainda faltam alguns... Mas não desanime!</p>
          </>
        ) : (
          <>
            <div>
              <img src={partyImg} alt={partyImg} />
              <p id="title">Parabéns!</p>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
          </>
        )}
      </ResultsBox>
      <ContadorBox resultados={resultados}>
        <p>
          {contadorRespostas}/{resultados.length} CONCLUÍDOS
        </p>
        <ImgBox>
          {resultadosOrdenados.map((resultadoIcone, index) => (
            <img
              key={index}
              data-test={imagem[resultadoIcone].dataTest}
              src={imagem[resultadoIcone].src}
              alt={resultadosOrdenados}
            />
          ))}
        </ImgBox>
      </ContadorBox>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: inherit;
  height: ${(props) =>
    props.resultados.includes(undefined) ? "70px" : "171px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  box-sizing: border-box;
`;

const ContadorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  width: 200px;
  bottom: 10px; //distância fixa para não mudar após alteração no footer
`;

const ImgBox = styled.div`
  display: flex;
  gap: 5px;
`;

const ResultsBox = styled.div`
  #title {
    font-weight: 700;
  }
  div {
    display: flex;
    gap: 12px;
  }
  img {
    width: 23px;
    height: 23px;
  }
  display: ${(props) =>
    props.resultados.includes(undefined) ? "none" : "flex"};
  width: 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
`;
