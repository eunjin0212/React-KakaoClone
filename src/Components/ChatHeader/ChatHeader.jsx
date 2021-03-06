import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../BaseComponent";
import OpenChat from "../../Assets/images/openChat.png";
import Search from "../../Assets/images/search.png";
import Music from "../../Assets/images/music.png";
import Cog from "../../Assets/images/cog.png";

const ChatHeaders = ({ location: hash }) => {
  let hashs = window.location.hash;
  const getStyle = (path) => {
    return {
      color: hashs === path ? "#191919" : "#B6B6B6",
    };
  };
  return (
    <Chat>
      <Div>
        <ChatMenu>
          <ChatLinks to="/chats">
            <Container title="채팅" style={getStyle("#/chats")} />
          </ChatLinks>
          <ChatLinks to="/chats/openchats">
            <Container title="오픈채팅" style={getStyle("#/chats/openchats")} />
          </ChatLinks>
        </ChatMenu>

        <ChatIcons>
          {<img src={Search} width="18px" height="18px" alt="" />}
          {<img src={OpenChat} width="18px" height="18px" alt="" />}
          {<img src={Music} width="18px" height="18px" alt="" />}
          {
            <ChatLinks to="/setting">
              <img src={Cog} width="18px" height="18px" alt="" />
            </ChatLinks>
          }
        </ChatIcons>
      </Div>
    </Chat>
  );
};
export default ChatHeaders;

const Chat = styled.div`
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
