import imagem from "../constants/iconInfo";
import styled from "styled-components";

export default function Contador({
  resultados,
  contadorRespostas,
  resultadosOrdenados,
}) {
  return (
    <FooterWrapper data-test="footer">
      <p>
        {contadorRespostas}/{resultados.length} CONCLUÍDOS
      </p>

      <ImgBox>
        {resultadosOrdenados.map((resultadoIcone) => (
          <img src={imagem[resultadoIcone].src} alt={resultadosOrdenados} />
        ))}
      </ImgBox>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: inherit;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  display: flex;
  flex-direction: column;
  gap:5px;
`;

const ImgBox = styled.div`
display:flex;
gap: 5px;
`;
