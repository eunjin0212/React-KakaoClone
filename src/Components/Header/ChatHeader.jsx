import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../BaseLabel";
import Setting from "../../Screens/Setting";
import OpenChat from "../../Screens/images/openChat.png";
import Search from "../../Screens/images/search.png";
import Music from "../../Screens/images/music.png";
import Cog from "../../Screens/images/cog.png";

const ChatHeaders = ({ location: { pathname } }) => {
  const getStyle = (path) => {
    return {
      color: pathname === path ? "#191919" : "#B6B6B6",
    };
  };
  return (
    <>
      <ChatContainer>
        <Div>
          <ChatMenu>
            <ChatLinks to="/chats" style={getStyle("/chats")}>
              <Container current={pathname === "/chats"} title="채팅" />
            </ChatLinks>
            <ChatLinks to="/openchats" style={getStyle("/openchats")}>
              <Container current={pathname === "/openchats"} title="오픈채팅" />
            </ChatLinks>
          </ChatMenu>

          <ChatIcons>
            {<img src={Search} width="18px" height="18px" alt="" />}
            {<img src={OpenChat} width="18px" height="18px" alt="" />}
            {<img src={Music} width="18px" height="18px" alt="" />}
            {
              <Links to="/setting" current={pathname === "/setting"}>
                <img src={Cog} width="18px" height="18px" alt="" />
              </Links>
            }
          </ChatIcons>
        </Div>
      </ChatContainer>
    </>
  );
};
export default withRouter(ChatHeaders);

const ChatContainer = styled.div`
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
const ChatMenu = styled.div`
  display: flex;
`;

const ChatIcons = styled.div`
  display: flex;
  align-items: center;
  img {
    &:not(:last-child) {
      margin-right: 18px;
    }
  }
`;
const ChatLinks = styled(Link)``;
const Links = styled(Link)``;
