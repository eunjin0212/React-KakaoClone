import React from "react";
import styled from "styled-components";
import ChatHeader from "../../Components/ChatHeader";
import Ad from "../../Assets/images/ad.jpg";

const ChatsPresenter = ({ title, content, time, image, icons, member }) => {
  return (
    <Wrapper>
      <ChatHeader />
      <AdContainer>
        <img src={Ad} alt="" />
      </AdContainer>
      {Object.values(title.title).map((title, i) => {
        return (
          <Profile>
            <div style={{ display: "flex" }}>
              <ProfileImg src={image.src[i]} />
              <div>
                <MeChatContainer>
                  <div style={{ marginRight: "5px" }}>{title}</div>
                  <span>{member.num[i]}</span>
                  <img src={icons.pin[i]} alt="" />
                  <img src={icons.bell[i]} alt="" />
                </MeChatContainer>
                <MeChat>{content.message[i]}</MeChat>
              </div>
            </div>
            <ChatTime>{time.time[i]}</ChatTime>
          </Profile>
        );
      })}
    </Wrapper>
  );
};
export default ChatsPresenter;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 90px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const AdContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    position: relative;
    height: 90px;
    width: 100%;
    border-radius: 10px;
  }
  margin-bottom: 20px;
`;
const Profile = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  :not(:last-child) {
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 5px;
  }
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 40%;
  border: 1px solid #e7e7e7;
  margin-right: 10px;
`;
const MeChatContainer = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  img {
    margin: 0px 5px;
    width: 10px;
    height: 11px;
  }
  span {
    color: #9a9a9a;
  }
`;

const MeChat = styled.div`
  font-size: 12px;
  color: #9a9a9a;
  margin-top: 5px;
`;
const ChatTime = styled.div`
  margin-left: 50px;
  color: #b6b6b6;
  font-size: 10px;
`;
