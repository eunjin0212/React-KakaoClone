import React from "react";
import styled from "styled-components";

import Search from "../images/search.png";
import OpenChat from "../images/openChat.png";
import Music from "../images/music.png";
import Cog from "../images/cog.png";

const FriendContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 47px;
  align-items: center;
`;
const FriendHeaders = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;
const FriendText = styled.div`
  font-size: 20px;
  color: #191919;
`;

const FriendIcons = styled.div`
  display: flex;
  align-items: center;
`;
const FriendItems = styled.div`
  &:not(:last-child) {
    margin-right: 18px;
  }
`;

const FriendstHeader = () => {
  return (
    <>
      <FriendContainer>
        <FriendHeaders>
          <FriendText>친구</FriendText>

          <FriendIcons>
            <FriendItems>
              <img src={Search} width="18px" height="18px" alt="" />
            </FriendItems>
            <FriendItems>
              <img src={OpenChat} width="18px" height="18px" alt="" />
            </FriendItems>
            <FriendItems>
              <img src={Music} width="18px" height="18px" alt="" />
            </FriendItems>
            <FriendItems>
              <img src={Cog} width="18px" height="18px" alt="" />
            </FriendItems>
          </FriendIcons>
        </FriendHeaders>
      </FriendContainer>
    </>
  );
};
export default FriendstHeader;
