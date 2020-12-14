import React from "react";
import styled from "styled-components";
import { Container } from "../BaseLabel";
import { Link, withRouter } from "react-router-dom";

import Setting from "../../Screens/Setting";
import Search from "../../Screens/images/search.png";
import OpenChat from "../../Screens/images/openChat.png";
import Music from "../../Screens/images/music.png";
import Cog from "../../Screens/images/cog.png";

const FriendstHeader = ({ loaction: { pathname } }) => {
  return (
    <>
      <FriendContainer>
        <Div>
          <Container title="친구" style={{ color: "#191919" }}>
            <Icons>
              {<img src={Search} width="18px" height="18px" alt="" />}
              {<img src={OpenChat} width="18px" height="18px" alt="" />}
              {<img src={Music} width="18px" height="18px" alt="" />}
              {
                <Link to="/setting" current={pathname === "/setting"}>
                  <img src={Cog} width="18px" height="18px" alt="" />
                </Link>
              }
            </Icons>
          </Container>
        </Div>
      </FriendContainer>
    </>
  );
};
export default withRouter(FriendstHeader);
const FriendContainer = styled.div`
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
const Icons = styled.div`
  display: flex;
  align-items: center;
  img {
    &:not(:last-child) {
      margin-right: 18px;
    }
  }
`;
