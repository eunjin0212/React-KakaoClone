import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../BaseComponent";
import Covid19 from "../../Screens/Shap/Covid19";
import KakaoTV from "../../Screens/Shap/KakaoTV";
import Entertain from "../../Screens/Shap/Entertain";
import Fun from "../../Screens/Shap/Fun";
import Sports from "../../Screens/Shap";
import Arrow from "../../Assets/images/arrow.png";

const ShapHeader = ({ match }) => {
  const getStyle = (path) => {
    return {
      color: match.url === path ? "#191919" : "#B6B6B6",
      borderBottom: match.url === path ? "2px solid #191919" : "transparent",
      transition: "border-bottom 0.5s ease-in-out",
    };
  };
  console.log(match);
  return (
    <>
      <ShapContainer>
        <Div>
          <ShapMenu>
            <ShapLinks to={`${match.url}/covid19`}>
              <Container title="코로나19" style={getStyle("/covid19")} />
            </ShapLinks>
            <ShapLinks to={`${match.url}/shap`}>
              <Container title="뉴스" style={getStyle("/shap")} />
            </ShapLinks>
            <ShapLinks to={`${match.url}/kakaotv`}>
              <Container title="카카오TV" style={getStyle("/kakaotv")} />
            </ShapLinks>
            <ShapLinks to={`${match.url}/fun`}>
              <Container title="FUN" style={getStyle("/fun")} />
            </ShapLinks>
            <ShapLinks to={`${match.url}/entertain`}>
              <Container title="연애" style={getStyle("/entertain")} />
            </ShapLinks>
            <ShapLinks to={`${match.url}/sports`}>
              <Container title="스포츠" style={getStyle("/sports")} />
            </ShapLinks>
          </ShapMenu>
          <ShapIcons>
            <img src={Arrow} width="18px" height="18px" alt="" />
          </ShapIcons>
        </Div>

        <Route path="/covid19" component={Covid19} />
        <Route path="/kakaotv" component={KakaoTV} />
        <Route path="/fun" component={Fun} />
        <Route path="/entertain" component={Entertain} />
        <Route path="/sports" component={Sports} />
      </ShapContainer>
    </>
  );
};
export default ShapHeader;
const ShapContainer = styled.div`
  position: fixed;
  height: 40px;
  align-items: center;
  background-color: white;
  top: 50px;
  left: 0;
  box-sizing: border-box;
  padding: 15px 15px 10px 15px;
  width: 100%;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
`;
const ShapMenu = styled.div`
  display: flex;
  box-sizing: content-box;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-color: white;
  cursor: pointer;
`;

const ShapIcons = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const ShapLinks = styled(Link)``;
