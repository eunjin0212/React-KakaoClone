import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

import ChatHeader from "./ChatHeader";
import FriendHeader from "./FriendHeader";
import ShapHeaders from "./ShapHeader";
import MoreHeader from "./MoreHeader";

//Image
import Signal from "../../Screens/images/signal.png";
import Wifi from "../../Screens/images/wifi.png";
import Battery from "../../Screens/images/battery.png";

const Header = ({ location: { pathname } }) => {
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

  const Headers = () => {
    if (pathname === "/chats" || pathname === "/openchats") {
      return (
        <>
          <ChatHeader />
        </>
      );
    } else if (pathname === "/") {
      return (
        <>
          <FriendHeader />
        </>
      );
    } else if (pathname === "/more") {
      return (
        <>
          <MoreHeader />
        </>
      );
    } else if (
      pathname === "/shap" ||
      pathname === "/covid19" ||
      pathname === "/kakaotv" ||
      pathname === "/entertain" ||
      pathname === "/fun" ||
      pathname === "/sports"
    ) {
      return (
        <>
          <ShapHeaders />
        </>
      );
    }
  };

  return (
    <>
      <Container>
        <CommonItems>
          {getTime()}
          <IconContainer>
            <IconsItems>
              <img src={Signal} width="18px" height="15px" alt="" />
            </IconsItems>
            <IconsItems>
              <img src={Wifi} width="18px" height="15px" alt="" />
            </IconsItems>
            <IconsItems>
              <img src={Battery} width="18px" height="18px" alt="" />
            </IconsItems>
          </IconContainer>
        </CommonItems>
        {Headers()}
      </Container>
    </>
  );
};
export default withRouter(Header);

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: white;
`;
const CommonItems = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
`;
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

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const IconsItems = styled.div`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;
