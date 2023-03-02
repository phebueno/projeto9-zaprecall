import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import logo from "./assets/logo.png";
import seta from "./assets/seta_play.png"

export default function App() {
  return (
    <ContainerApp>
      <GlobalStyle />
      <Header>
        <img src={logo} alt="ZapRecall" />
        <h1>ZapRecall</h1>
      </Header>
      <Main>
        <div>
          <p>Pergunta 1</p><img src={seta} alt="Seta" />
        </div>
        <div>
          <p>Pergunta 2</p><img src={seta} alt="Seta" />
        </div>
        <div>
          <p>Pergunta 3</p><img src={seta} alt="Seta" />
        </div>
        <div>
          <p>Pergunta 4</p><img src={seta} alt="Seta" />
        </div>
        
      </Main>
      <Footer>0/4 CONCLUÍDOS</Footer>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  width: 375px;
`;

const Header = styled.header`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fb6b6b;
  h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -0.012em;
    line-height: 45px;
    color: #ffffff;
  }
  img {
    width: 52px;
    height: 60px;
  }
`;

const Main = styled.main`
  padding: 0 45px 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fb6b6b;
  gap: 20px;
  div {
    //Renomear este container de acordo com mudanças
    width: 300px;
    height: 65px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 15px;
    p {
      font-family: "Recursive", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
    }
    img{
      width: 20px;
      height: 23px;
    }
  }
`;

const Footer = styled.footer`
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
