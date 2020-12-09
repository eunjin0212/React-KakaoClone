import React, { useState } from "react";
import styled from "styled-components";

//images
import Me from "../images/bori-pro.jpg";
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

  return (
    <>
      <FriendContainer>
        <Profile>
          <img src={Me} alt="" />
          <div>
            <Name>김보리</Name>
          </div>
        </Profile>
        <Box>
          {Object.values(title.title).map((title, i) => {
            return (
              <>
                <FriendsMain>
                  <FriendsText>
                    <div>{title}</div>
                    <div>^</div>
                  </FriendsText>
                  <FriendsMainHeader>
                    <FriendsFront>
                      <Image src={img.src[i]} />
                      <div>{content.content[i]}</div>
                    </FriendsFront>
                    <FriendsRear>
                      {num.num[i]}
                      <div>{sign.sign[i]}</div>
                    </FriendsRear>
                  </FriendsMainHeader>
                </FriendsMain>
              </>
            );
          })}
        </Box>
      </FriendContainer>
    </>
  );
};

export default FriendsContainer;
//styles
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
  height: 60px;
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
  margin: 10px 0px;
`;
const FriendsMain = styled.div`
  padding: 10px 0px;
  border-top: 1px solid #ececec;
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
