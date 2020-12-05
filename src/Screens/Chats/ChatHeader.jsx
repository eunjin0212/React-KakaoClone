import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import OpenChats from "./OpenChats";

import Search from "../images/search.png";
import OpenChat from "../images/openChat.png";
import Music from "../images/music.png";
import Cog from "../images/cog.png";

const ChatContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 47px;
  align-items: center;
  background-color: white;
`;
const ChatHeaders = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;
const ChatTexts = styled.div`
  font-size: 20px;
`;
const ChatText = styled.span`
  margin-right: 14px;
`;
const OpenChateText = styled.span``;

const ChatIcons = styled.div`
  display: flex;
  align-items: center;
`;
const ChatItems = styled.div`
  &:not(:last-child) {
    margin-right: 18px;
  }
`;
const ChatLinks = styled(Link)``;

const ChatHeader = ({ location: { pathname } }) => {
  const getStyle = (path) => ({
    color: pathname === path ? "#191919" : "#B6B6B6",
  });
  return (
    <>
      <ChatContainer>
        <ChatHeaders>
          <ChatTexts>
            <ChatText
              current={pathname === "/chats"}
              style={getStyle("/chats")}
            >
              <ChatLinks to="/chats">채팅</ChatLinks>
            </ChatText>
            <OpenChateText
              current={pathname === "/openchats"}
              style={getStyle("/openchats")}
            >
              <ChatLinks to="/openchats">오픈채팅</ChatLinks>
            </OpenChateText>
          </ChatTexts>

          <ChatIcons>
            <ChatItems>
              <img src={Search} width="18px" height="18px" alt="" />
            </ChatItems>
            <ChatItems>
              <img src={OpenChat} width="18px" height="18px" alt="" />
            </ChatItems>
            <ChatItems>
              <img src={Music} width="18px" height="18px" alt="" />
            </ChatItems>
            <ChatItems>
              <img src={Cog} width="18px" height="18px" alt="" />
            </ChatItems>
          </ChatIcons>
        </ChatHeaders>
      </ChatContainer>
      <Router>
        <Switch>
          <Route path="/openchats" exact component={OpenChats} />
        </Switch>
      </Router>
    </>
  );
};
export default withRouter(ChatHeader);
