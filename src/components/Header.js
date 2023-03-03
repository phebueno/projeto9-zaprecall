import styled from "styled-components";

export default function Header({logo}){
    return(
        <HeaderWrapper>
        <img src={logo} alt="ZapRecall" />
        <h1>ZapRecall</h1>
      </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
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