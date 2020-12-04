import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

//Image
import clickUser from "../Screens/images/clickUser.png";
import Comment from "../Screens/images/comment.png";
import Setting from "../Screens/images/setting.png";
import ClickComment from "../Screens/images/ClickComment.png";
import User from "../Screens/images/user.png";

const NaviContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 -5px 10px -5px #e0e0e0;
`;
const Navi = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9fa;
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
              {pathname === "/" ? (
                <img src={clickUser} alt="" />
              ) : (
                <img src={User} alt="" />
              )}
            </NaviLink>
          </Item>
          <Item aria-current={pathname === "/chats"}>
            <NaviLink to="/chats">
              {pathname === "/chats" ? (
                <img src={ClickComment} alt="" />
              ) : (
                <img src={Comment} alt="" />
              )}
            </NaviLink>
          </Item>
          <Item aria-current={pathname === "/shap"}>
            <NaviLink to="/shap">
              {pathname === "/shap" ? (
                <span style={{ fontWeight: "700" }}>#</span>
              ) : (
                <span style={{ fontWeight: "500" }}>#</span>
              )}
            </NaviLink>
          </Item>
          <Item aria-current={pathname === "/setting"}>
            <NaviLink to="/setting">
              <img src={Setting} alt="" />
            </NaviLink>
          </Item>
        </Navi>
      </NaviContainer>
    </>
  );
};

export default withRouter(Navigation);
