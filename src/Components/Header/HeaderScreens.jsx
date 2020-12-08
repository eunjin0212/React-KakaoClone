import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import FriendHeader from "./FriendHeader";
import ShapHeaders from "./ShapHeader";
import SettingHeaders from "./SettingHeader";

//Image
import Signal from "../../Screens/images/signal.png";
import Wifi from "../../Screens/images/wifi.png";
import Battery from "../../Screens/images/battery.png";

const HeaderScreens = ({ location: { pathname } }) => {
  const getTime = () => {
    let date = new Date();
    let hours = (date.getHours() + 24) % 12 || 12;
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return (
      <>
        <TimeContainer>{hours + ":" + minutes}</TimeContainer>
      </>
    );
  };
  return getTime();
};

export default HeaderScreens;

const TimeContainer = styled.div`
  position: relative;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  text-align: center;
  height: 20px;
`;
