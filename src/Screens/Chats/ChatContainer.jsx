import React from "react";
import ChatsPresenter from "./ChatPresenter";
import Me from "../../Assets/images/bori-pro.jpg";
import Bell from "../../Assets/images/Bell.png";
import Pin from "../../Assets/images/pin.png";
import User from "../../Assets/images/profile.png";

const ChatContainer = () => {
  const title = {
    title: ["MEMO", "김은진", "단톡방"],
  };
  const image = {
    src: [Me, User],
  };
  const content = {
    message: ["나와의 채팅", "안녕 보리야", "오늘 애견운동장 가고싶다!"],
  };
  const time = {
    time: ["어제", "오후 12:03", "오후 04:36"],
  };
  const icons = {
    pin: [Pin, "", Bell],
    bell: [Bell, "", ""],
  };
  const member = {
    num: ["", "", 6],
  };
  return (
    <>
      <ChatsPresenter
        title={title}
        content={content}
        time={time}
        image={image}
        icons={icons}
        member={member}
      />
    </>
  );
};

export default ChatContainer;
