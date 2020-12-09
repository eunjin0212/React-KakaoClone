// eslint-disable-next-line
import React from "react";
import { Chatings } from "../../Components/BaseLabel";
import styled from "styled-components";
import profile from "../../Screens/images/bori-pro.jpg";

const Chats = () => {
  return (
    <>
      <ChatContainer>
        {<img src={profile} alt="" />}
        <Me>나</Me>
        <Chatings name="MEMO"></Chatings>
      </ChatContainer>
    </>
  );
};
const ChatContainer = styled.div`
  width: 100%;
  position: relative;
  top: 100px;
  padding: 15px;
  display: flex;
  img {
    width: 45px;
    height: 45px;
    border-radius: 40%;
    border: 1px solid #e7e7e7;
    margin-right: 10px;
  }
`;
const Me = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-color: #4a515c;
  color: #ffffff;
  border-radius: 50%;
  font-size: 10px;
  margin-right: 5px;
`;

export default Chats;
