import React, { useState } from "react";
import styled from "styled-components";

import Me from "../images/bori-pro.jpg";
import cake from "../images/cake.png";
import chennel from "../images/chennel.png";
import smile from "../images/smile.png";

const FriendContainer = styled.div`
  width: 100%;
  position: relative;
  top: 100px;
  padding: 15px;
`;
const Profile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #ececec;
  img {
    width: 50px;
    height: 50px;
    border-radius: 40%;
    border: 1px solid #e7e7e7;
    margin-right: 10px;
  }
`;
const Name = styled.span`
  color: #212121;
`;

const Box = styled.div`
  margin: 13px 0px;
`;
const FriendsMain = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ececec;
`;
const FriendsText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
  color: #a1a1a1;
`;
const FriendsMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FriendsFront = styled.div`
  display: flex;
  align-items: center;
  img {
    border: 1px solid #e7e7e7;
    border-radius: 40%;
    margin-right: 5px;
  }
`;
const FriendsRear = styled.div`
  display: flex;
  color: #a1a1a1;
`;

const FriendsBox = styled.div``;
const Friend = styled.div``;

const FriendsContainer = () => {
  return (
    <div>
      <FriendContainer>
        <Profile>
          <img src={Me} alt="" />
          <div>
            <Name>김보리</Name>
          </div>
        </Profile>
        <Box>
          <FriendsMain>
            <FriendsText>
              <div>생일인 친구</div>
              <div>^</div>
            </FriendsText>
            <FriendsMainHeader>
              <FriendsFront>
                <img src={cake} alt="" width="35px" height="35px" />
                <div>친구의 생일을 확인해보세요!</div>
              </FriendsFront>
              <FriendsRear>
                5<div>></div>
              </FriendsRear>
            </FriendsMainHeader>
          </FriendsMain>
          <FriendsMain>
            <FriendsText>
              <div>추천친구</div>
              <div>^</div>
            </FriendsText>
            <FriendsMainHeader>
              <FriendsFront>
                <img src={smile} alt="" width="35px" height="35px" />
                <div>새로운 친구를 만나보세요!</div>
              </FriendsFront>
              <FriendsRear>
                100<div>></div>
              </FriendsRear>
            </FriendsMainHeader>
          </FriendsMain>
          <FriendsMain>
            <FriendsText>
              <div>채널</div>
              <div>^</div>
            </FriendsText>
            <FriendsMainHeader>
              <FriendsFront>
                <img src={chennel} alt="" width="35px" height="35px" />
                <div>채널</div>
              </FriendsFront>
              <FriendsRear>
                23<div>></div>
              </FriendsRear>
            </FriendsMainHeader>
          </FriendsMain>
        </Box>
        <FriendsBox>
          <Friend></Friend>
        </FriendsBox>
      </FriendContainer>
    </div>
  );
};

export default FriendsContainer;
