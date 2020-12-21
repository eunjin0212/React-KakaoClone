import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";

import mail from "../../Assets/images/mail.png";
import calendar from "../../Assets/images/calendar.png";
import drawer from "../../Assets/images/drawer.png";
import maker from "../../Assets/images/maker.png";
import gift from "../../Assets/images/gift.png";
import emoticon from "../../Assets/images/emoticon.png";
import rion from "../../Assets/images/rion.png";
import shopping from "../../Assets/images/shopping.png";
import styles from "../../Assets/images/style.png";
import order from "../../Assets/images/order.png";
import ticket from "../../Assets/images/ticket.png";
import game from "../../Assets/images/game.png";
import page from "../../Assets/images/page.png";
import music from "../../Assets/images/music.png";
import hair from "../../Assets/images/hair.png";
import service from "../../Assets/images/service.png";

const DetailContainer = () => {
  const title = {
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
  };

  const icons = {
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
  };

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
