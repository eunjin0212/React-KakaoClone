import React, { useState, useEffect } from "react";
import FriendsPresenter from "./FriendsPresenter";

import cake from "../images/cake.png";
import channel from "../images/channel.png";
import smile from "../images/smile.png";
import profile from "../images/profile.png";
const FriendsContainer = () => {
  const [title] = useState({
    title: ["생일인 친구", "추천친구", "채널", "친구 1"],
  });
  const [content] = useState({
    content: [
      "친구의 생일을 확인해보세요!",
      "새로운 친구를 만나보세요",
      "채널",
      "김은진",
    ],
  });

  const [num] = useState({ num: ["5", "100", "23"] });
  const [sign] = useState({ sign: [">", ">", ">"] });

  const [img] = useState({
    src: [cake, smile, channel, profile],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = () => {
    try {
      if (!title && !content && !num && !sign && !img) {
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
      <FriendsPresenter
        title={title}
        content={content}
        num={num}
        sign={sign}
        img={img}
        loading={loading}
        error={error}
      />
    </>
  );
};
export default FriendsContainer;
