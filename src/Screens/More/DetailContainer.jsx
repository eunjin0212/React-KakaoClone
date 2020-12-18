import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";

import mail from "../images/mail.png";
import calendar from "../images/calendar.png";
import drawer from "../images/drawer.png";
import maker from "../images/maker.png";
import gift from "../images/gift.png";
import emoticon from "../images/emoticon.png";
import rion from "../images/rion.png";
import shopping from "../images/shopping.png";
import styles from "../images/style.png";
import order from "../images/order.png";
import ticket from "../images/ticket.png";
import game from "../images/game.png";
import page from "../images/page.png";
import music from "../images/music.png";
import hair from "../images/hair.png";
import service from "../images/service.png";

const DetailContainer = () => {
  const [title] = useState({
    title: [
      "메일",
      "캘린더",
      "서랍",
      "메이커스",
      "선물하기",
      "이모티콘",
      "프렌즈",
      "쇼핑하기",
      "스타일",
      "주문하기",
      "멜론티켓",
      "게임",
      "페이지",
      "멜론",
      "헤어샵",
      "전체서비스",
    ],
  });

  const [icons] = useState({
    src: [
      mail,
      calendar,
      drawer,
      maker,
      gift,
      emoticon,
      rion,
      shopping,
      styles,
      order,
      ticket,
      game,
      page,
      music,
      hair,
      service,
    ],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = () => {
    try {
      if (!title && !icons) {
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
  });

  return (
    <>
      <DetailPresenter
        title={title}
        icons={icons}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default DetailContainer;
