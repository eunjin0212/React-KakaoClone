import React from "react";
import OpenChatPresenter from "./OpenChatPresenter";
import Bell from "../../Assets/images/Bell.png";
import User from "../../Assets/images/profile.png";
import Open from "../../Assets/images/open.png";

const OpenChatContainer = () => {
  const title = {
    title: [
      "보더대마왕-보더콜리견주모임...",
      "경기도 보더콜리 모임🐶 (타견종가···",
      "은진/27/일산/보리",
    ],
  };
  const image = {
    src: [User, "", Open],
  };
  const content = {
    message: [
      "동영상을 보냈습니다.",
      "반갑습니다",
      "대화 중인 오픈채팅방이 없습니다.",
    ],
  };
  const time = {
    time: ["오후 11:01", "오전 11:29", "오후 06:36"],
  };
  const icons = {
    bell: [Bell, Bell, ""],
  };
  const member = {
    num: [78, 19, ""],
  };
  return (
    <OpenChatPresenter
      title={title}
      image={image}
      content={content}
      time={time}
      icons={icons}
      member={member}
    />
  );
};

export default OpenChatContainer;
