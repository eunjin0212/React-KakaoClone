import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../BaseLabel";

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
        <ShapMenu>
          <ShapLinks to="/covid19">
            <Header
              title="코로나19"
              current={pathname === "/covid19"}
              style={getStyle("/covid19")}
            />
          </ShapLinks>
          <ShapLinks to="/news">
            <Header
              title="뉴스"
              current={pathname === "/news"}
              style={getStyle("/news")}
            />
          </ShapLinks>
          <ShapLinks to="/kakaotv">
            <Header
              title="카카오TV"
              current={pathname === "/kakaotv"}
              style={getStyle("/kakaotv")}
            />
          </ShapLinks>
          <ShapLinks to="/fun">
            <Header
              title="FUN"
              current={pathname === "/fun"}
              style={getStyle("/fun")}
            />
          </ShapLinks>
          <ShapLinks to="/entertain">
            <Header
              title="연애"
              current={pathname === "/entertain"}
              style={getStyle("/entertain")}
            />
          </ShapLinks>
          <ShapLinks to="/sports">
            <Header
              title="스포츠"
              current={pathname === "/sports"}
              style={getStyle("/sports")}
            />
          </ShapLinks>
        </ShapMenu>
        <ShapIcons>
          <img src={Arrow} width="18px" height="18px" alt="" />
        </ShapIcons>
      </ShapContainer>
    </>
  );
};
export default withRouter(ShapHeader);
const ShapContainer = styled.div`
  height: 40px;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
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
`;
const ShapLinks = styled(Link)``;
