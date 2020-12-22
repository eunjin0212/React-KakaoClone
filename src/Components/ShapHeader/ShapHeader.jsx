import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../BaseComponent";

import Arrow from "../../Assets/images/arrow.png";

const ShapHeader = ({ location: hash }) => {
  let hashs = window.location.hash;
  const getStyle = (path) => {
    return {
      color: hashs === path ? "#191919" : "#B6B6B6",
      borderBottom: hashs === path ? "2px solid #191919" : "transparent",
      transition: "border-bottom 0.5s ease-in-out",
    };
  };
  return (
    <ShapContainer>
      <Div>
        <ShapMenu>
          <ShapLinks to="/shap/covid19">
            <Container title="코로나19" style={getStyle("#/shap/covid19")} />
          </ShapLinks>
          <ShapLinks to="/shap">
            <Container title="뉴스" style={getStyle("#/shap")} />
          </ShapLinks>
          <ShapLinks to="/shap/kakaotv">
            <Container title="카카오TV" style={getStyle("#/shap/kakaotv")} />
          </ShapLinks>
          <ShapLinks to="/shap/fun">
            <Container title="FUN" style={getStyle("#/shap/fun")} />
          </ShapLinks>
          <ShapLinks to="/shap/entertain">
            <Container title="연애" style={getStyle("#/shap/entertain")} />
          </ShapLinks>
          <ShapLinks to="/shap/sport">
            <Container title="스포츠" style={getStyle("#/shap/sport")} />
          </ShapLinks>
        </ShapMenu>
        <ShapIcons>
          <img src={Arrow} width="18px" height="18px" alt="" />
        </ShapIcons>
      </Div>
    </ShapContainer>
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
  z-index: 2;
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
