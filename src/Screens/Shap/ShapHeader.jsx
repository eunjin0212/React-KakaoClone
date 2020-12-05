import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import Arrow from "../images/arrow.png";

const ShapContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 47px;
  align-items: center;
  background-color: white;
`;
const ShapHeaders = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;
const ShapScroll = styled.div`
  box-sizing: border-box;
  width: 100%;
`;
const ShapTexts = styled.div`
  box-sizing: content-box;
  width: 100%;
  padding: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
`;
const ShapText = styled.button`
  margin-right: 14px;
  font-size: 20px;
  border: none;
  background-color: inherit;
  border-bottom: 2px solid
    ${(props) => (props.current ? "#191919" : "transparent")};
  cursor: pointer;
  transition: border-bottom 0.5s ease-in-out;
`;

const ShapIcons = styled.div`
  display: flex;
  align-items: center;
`;
const ShoapItems = styled.div``;
const ShapLinks = styled(Link)``;

const ShapHeader = ({ location: { pathname } }) => {
  const getStyle = (path) => ({
    color: pathname === path ? "#191919" : "#B6B6B6",
  });
  //   const handleClick = (e, path) => (e.preventDefault(), {});
  //# 추가 하는 이벤트 만들기
  return (
    <>
      <ShapContainer>
        <ShapHeaders>
          <ShapTexts>
            <ShapScroll>
              {" "}
              <ShapText
                current={pathname === "/covid19"}
                style={getStyle("/covid19")}
              >
                <ShapLinks to="/covid19">코로나19</ShapLinks>
              </ShapText>
              <ShapText current={pathname === "/news"} style={getStyle("/")}>
                <ShapLinks to="/news">뉴스</ShapLinks>
              </ShapText>
              <ShapText
                current={pathname === "/kakaotv"}
                style={getStyle("/kakaotv")}
              >
                <ShapLinks to="/kakaotv">카카오TV</ShapLinks>
              </ShapText>
              <ShapText current={pathname === "/fun"} style={getStyle("/fun")}>
                <ShapLinks to="/fun">FUN</ShapLinks>
              </ShapText>
              <ShapText
                current={pathname === "/entertain"}
                style={getStyle("/entertain")}
              >
                <ShapLinks to="/entertain">연애</ShapLinks>
              </ShapText>
              <ShapText
                current={pathname === "/sports"}
                style={getStyle("/sports")}
              >
                <ShapLinks to="/sports">스포츠</ShapLinks>
              </ShapText>
            </ShapScroll>
          </ShapTexts>

          <ShapIcons>
            <ShoapItems>
              <img src={Arrow} width="18px" height="18px" alt="" />
            </ShoapItems>
          </ShapIcons>
        </ShapHeaders>
      </ShapContainer>
    </>
  );
};
export default withRouter(ShapHeader);
