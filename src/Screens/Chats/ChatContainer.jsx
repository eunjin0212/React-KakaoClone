import React, { useState, useEffect } from "react";
import ChatsPresenter from "./ChatPresenter";
import Me from "../images/bori-pro.jpg";
import Bell from "../images/Bell.png";
import Pin from "../images/pin.png";
import User from "../images/profile.png";

const ChatContainer = () => {
  const [title] = useState({ title: ["MEMO", "김은진", "단톡방"] });
  const [image] = useState({
    src: [Me, User],
  });
  const [content] = useState({
    message: ["나와의 채팅", "안녕 보리야", "오늘 애견운동장 가고싶다!"],
  });
  const [time] = useState({
    time: ["어제", "오후 12:03", "오후 04:36"],
  });
  const [icons] = useState({
    pin: [Pin, "", Bell],
    bell: [Bell, "", ""],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = () => {
    try {
      if (!title && !content && !time) {
        setLoading(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <ChatsPresenter
        title={title}
        content={content}
        time={time}
        image={image}
        icons={icons}
      />
    </>
  );
};

export default ChatContainer;
