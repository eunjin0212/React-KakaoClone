import React, { useState, useEffect } from "react";
import SettingPresenter from "./SettingPresenter";

import Bullhorn from "../images/bullhorn.png";
import Flask from "../images/flask.png";
import Version from "../images/version.png";
import Lock from "../images/lock.png";
import Notice from "../images/bell-setting.png";
import Friends from "../images/user.png";
import Chatting from "../images/comment.png";
import Sun from "../images/sun.png";
import Theme from "../images/brush.png";
import Call from "../images/phone.png";
import Setting from "../images/setting.png";
import Question from "../images/question.png";

const SettingContainer = () => {
  const [title] = useState({
    title: [
      "공지사항",
      "실험실",
      "버전정보",
      "개인/보안",
      "알림",
      "친구",
      "채팅",
      "화면",
      "테마",
      "통화",
      "기타",
      "고객센터/도움말",
    ],
  });
  const [icons] = useState({
    src: [
      Bullhorn,
      Flask,
      Version,
      Lock,
      Notice,
      Friends,
      Chatting,
      Sun,
      Theme,
      Call,
      Setting,
      Question,
    ],
  });
  console.log(icons.src[0]);
  const [content] = useState({
    message: ["", "", "최신버전", "", "", "", "", "라이트모드", "", "", ""],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = () => {
    try {
      if (!title && !content && !icons) {
        return setLoading(true);
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
      <SettingPresenter
        title={title}
        content={content}
        icons={icons}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default SettingContainer;
