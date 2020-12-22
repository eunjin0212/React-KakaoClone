import React, { useState, useEffect } from "react";
import SettingPresenter from "./SettingPresenter";

import Bullhorn from "../../Assets/images/bullhorn.png";
import Flask from "../../Assets/images/flask.png";
import Version from "../../Assets/images/version.png";
import Lock from "../../Assets/images/lock.png";
import Notice from "../../Assets/images/bell-setting.png";
import Friends from "../../Assets/images/user.png";
import Chatting from "../../Assets/images/comment.png";
import Sun from "../../Assets/images/sun.png";
import Theme from "../../Assets/images/brush.png";
import Call from "../../Assets/images/phone.png";
import Setting from "../../Assets/images/setting.png";
import Question from "../../Assets/images/question.png";

const SettingContainer = () => {
  const title = {
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
  };
  const icons = {
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
  };
  const content = {
    message: ["", "", "최신버전", "", "", "", "", "라이트모드", "", "", ""],
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = () => {
    try {
      if (!title && !content && !icons) {
        return setLoading(true);
      }
    } catch (error) {
      setError({ error: "Error!!" });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SettingPresenter
      title={title}
      content={content}
      icons={icons}
      error={error}
      loading={loading}
    />
  );
};

export default SettingContainer;
