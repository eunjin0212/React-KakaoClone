import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../BaseLabel";

import Arrow from "../../Screens/images/arrow.png";

const ShapHeader = ({ location: { pathname } }) => {
  const getStyle = (path) => {
    return {
      color: pathname === path ? "#191919" : "#B6B6B6",
      borderBottom: pathname === path ? "2px solid #191919" : "transparent",
      transition: "border-bottom 0.5s ease-in-out",
    };
  };

  return (
    <>
      <ShapContainer>
        <Div>
          <ShapMenu>
            <ShapLinks to="/covid19">
              <Container
                title="코로나19"
                current={pathname === "/covid19"}
                style={getStyle("/covid19")}
              />
            </ShapLinks>
            <ShapLinks to="/shap">
              <Container
                title="뉴스"
                current={pathname === "/shap"}
                style={getStyle("/shap")}
              />
            </ShapLinks>
            <ShapLinks to="/kakaotv">
              <Container
                title="카카오TV"
                current={pathname === "/kakaotv"}
                style={getStyle("/kakaotv")}
              />
            </ShapLinks>
            <ShapLinks to="/fun">
              <Container
                title="FUN"
                current={pathname === "/fun"}
                style={getStyle("/fun")}
              />
            </ShapLinks>
            <ShapLinks to="/entertain">
              <Container
                title="연애"
                current={pathname === "/entertain"}
                style={getStyle("/entertain")}
              />
            </ShapLinks>
            <ShapLinks to="/sports">
              <Container
                title="스포츠"
                current={pathname === "/sports"}
                style={getStyle("/sports")}
              />
            </ShapLinks>
          </ShapMenu>
          <ShapIcons>
            <img src={Arrow} width="18px" height="18px" alt="" />
          </ShapIcons>
        </Div>
      </ShapContainer>
    </>
  );
};
export default withRouter(ShapHeader);
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
