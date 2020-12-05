import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import ChatHeader from "../Screens/Chats/ChatHeader";
import FriendHeader from "../Screens/Friends/FriendHeader";
import ShapHeaders from "../Screens/Shap/ShapHeader";
import SettingHeaders from "../Screens/Setting/SettingHeader";

//Image
import Signal from "../Screens/images/signal.png";
import Wifi from "../Screens/images/wifi.png";
import Battery from "../Screens/images/battery.png";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
`;
const CommonItems = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 30px;
`;
const TimeContainer = styled.div`
  font-weight: 700;
  font-size: 18px;
  align-item: center;
`;
const Items = styled.div``;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const IconsItems = styled.div`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

const Links = styled(Link)``;

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

  const chatHeaders = () => {
    return (
      <>
        {pathname === "/chats" || pathname === "/openchats" ? (
          <>
            <ChatHeader />
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  const FriendstHeader = () => {
    return (
      <>
        {pathname === "/" ? (
          <>
            <FriendHeader />
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  const SettingHeader = () => {
    return (
      <>
        {pathname === "/setting" ? (
          <>
            <SettingHeaders />
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  const ShapHeader = () => (
    <>
      {pathname === "/shap" ||
      pathname === "/covid19" ||
      pathname === "/news" ||
      pathname === "/kakaotv" ||
      pathname === "/entertain" ||
      pathname === "/fun" ||
      pathname === "/sports" ? (
        <>
          <ShapHeaders />
        </>
      ) : (
        ""
      )}
    </>
  );
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
        {chatHeaders()}
        {FriendstHeader()}
        {ShapHeader()}
        {SettingHeader()}
      </Container>
    </>
  );
};
export default withRouter(Header);
