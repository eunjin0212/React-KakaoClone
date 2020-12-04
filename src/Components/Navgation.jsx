import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import clickUser from "../Screens/images/clickUser.png";
import Comment from "../Screens/images/comment.png";
import Setting from "../Screens/images/setting.png";

const NaviContainer = styled.div`
  bottom: 0;
  width: 100%;
  height: 44px;
  box-shadow: 0 -5px 5px -5px #bdc3c7;
`;
const Navi = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: yellow;
`;
const Item = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
`;
const NaviLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 20px;
  img {
    height: 28px;
    width: 28px;
  }
  span {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
const Navigation = ({ location: { pathname } }) => {
  return (
    <>
      <NaviContainer>
        <Navi>
          <Item aria-current={pathname === "/"}>
            <NaviLink to="/">
              <img src={clickUser} alt="" />
            </NaviLink>
          </Item>
          <Item aria-current={pathname === "/chat"}>
            <NaviLink to="/">
              <img src={Comment} alt="" />
            </NaviLink>
          </Item>
          <Item aria-current={pathname === "/"}>
            <NaviLink to="/">
              <span>#</span>
            </NaviLink>
          </Item>
          <Item aria-current={pathname === "/"}>
            <NaviLink to="/">
              <img src={Setting} alt="" />
            </NaviLink>
          </Item>
        </Navi>
      </NaviContainer>
    </>
  );
};

export default withRouter(Navigation);
