import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import OpenChats from "../../Screens/Chats/OpenChats";
import { Header } from "../BaseLabel";

import Search from "../../Screens/images/search.png";
import OpenChat from "../../Screens/images/openChat.png";
import Music from "../../Screens/images/music.png";
import Cog from "../../Screens/images/cog.png";

const ChatHeaders = ({ location: { pathname } }) => {
  return (
    <>
      <ChatContainer>
        <ChatTexts>
          <ChatLinks
            to="/chats"
            style={{ color: pathname === "/chats" ? "black" : "#cccccc" }}
          >
            <Header current={pathname === "/chats"} title="채팅" />
          </ChatLinks>
          <ChatLinks
            to="/openchats"
            style={{ color: pathname === "/openchats" ? "black" : "#cccccc" }}
          >
            <Header current={pathname === "/openchats"} title="오픈채팅" />
          </ChatLinks>
        </ChatTexts>

        <ChatIcons>
          {<img src={Search} width="18px" height="18px" alt="" />}
          {<img src={OpenChat} width="18px" height="18px" alt="" />}
          {<img src={Music} width="18px" height="18px" alt="" />}
          {<img src={Cog} width="18px" height="18px" alt="" />}
        </ChatIcons>
      </ChatContainer>
      <Router>
        <Switch>
          <Route path="/openchats" exact component={OpenChats} />
        </Switch>
      </Router>
    </>
  );
};
export default withRouter(ChatHeaders);

const ChatContainer = styled.div`
  height: 40px;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;

const ChatTexts = styled.div`
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
