import React, { useState } from "react";
//import { useFn, useData } from "../../Components/Context";
import styled from "styled-components";
import PropTypes from "prop-types";

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
`;
const Image = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid #e7e7e7;
  border-radius: 40%;
  margin-right: 5px;
`;
const FriendsRear = styled.div`
  display: flex;
  color: #a1a1a1;
`;

const FriendsBox = styled.div``;
const Friend = styled.div``;

const FriendsContainer = () => {
  const [data] = useState({
    title: ["생일인 친구", "추천친구", "채널"],
    content: [
      "친구의 생일을 확인해보세요!",
      "새로운 친구를 만나보세요",
      "채널",
    ],
    num: [5, 100, 23],
  });
  const [img] = useState({
    src: [cake, smile, chennel],
  });
  console.log(img.src[0]);
  return (
    <>
      {console.log(data.img)}
      <FriendContainer>
        <Profile>
          <img src={Me} alt="" />
          <div>
            <Name>김보리</Name>
          </div>
        </Profile>
        <Box>
          {Object.values(data.title).map((title, i) => (
            <FriendsMain>
              <FriendsText>
                <div>{title}</div>
                <div>^</div>
              </FriendsText>
              <FriendsMainHeader>
                <FriendsFront>
                  <Image src={img.src[i]} />
                  <div>{data.content[i]}</div>
                </FriendsFront>
                <FriendsRear>
                  {data.num[i]}
                  <div>></div>
                </FriendsRear>
              </FriendsMainHeader>
            </FriendsMain>
          ))}
        </Box>
        <FriendsBox>
          <Friend></Friend>
        </FriendsBox>
      </FriendContainer>
    </>
  );
};

export default FriendsContainer;

// FriendsContainer.propTypes = {
//   mainTitle: PropTypes.string,
//   mainTitleSign: PropTypes.string,
//   mainContents: PropTypes.string,
//   mainRear: PropTypes.number,
//   mainRearSign: PropTypes.string,
// };
