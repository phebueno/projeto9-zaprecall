import styled from "styled-components";

export default function Contador({resultados, contadorRespostas}){
    return(
        <FooterWrapper data-test="footer">{contadorRespostas}/{resultados.length} CONCLUÍDOS</FooterWrapper>
    )
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
`;