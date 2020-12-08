import React from "react";
import styled from "styled-components";
import { FriendsHeader } from "../BaseLabel";

import Search from "../../Screens/images/search.png";
import OpenChat from "../../Screens/images/openChat.png";
import Music from "../../Screens/images/music.png";
import Cog from "../../Screens/images/cog.png";

const FriendstHeader = () => {
  return (
    <>
      <FriendContainer>
        <FriendsHeader title="친구">
          <Icons>
            {<img src={Search} width="18px" height="18px" alt="" />}
            {<img src={OpenChat} width="18px" height="18px" alt="" />}
            {<img src={Music} width="18px" height="18px" alt="" />}
            {<img src={Cog} width="18px" height="18px" alt="" />}
          </Icons>
        </FriendsHeader>
      </FriendContainer>
    </>
  );
};
export default FriendstHeader;
const FriendContainer = styled.div`
  height: 40px;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  img {
    &:not(:last-child) {
      margin-right: 18px;
    }
  }
`;
