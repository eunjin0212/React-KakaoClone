import React from "react";
import styled from "styled-components";
import Loading from "../Loading";

import Me from "../images/bori-pro.jpg";
import Bell from "../images/Bell.png";
import Pin from "../images/pin.png";

const ChatsPresenter = ({ title, content, loading, error, time }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container>
            {Object.values(title).map((title, i) => {
              return (
                <>
                  <Profile>
                    <div style={{ display: "flex" }}>
                      <ProfileImg>
                        <img src={Me} alt="" />
                      </ProfileImg>
                      <div>
                        <MeChatContainer>
                          <div>{title[i]}</div>
                          <My>나</My>
                          <Icons>
                            <img src={Pin} alt="" />
                            <img src={Bell} alt="" />
                          </Icons>
                        </MeChatContainer>
                        <MeChat>{content.message[i]}</MeChat>
                      </div>
                    </div>
                    <ChatTime>{time.time[i]}</ChatTime>
                  </Profile>
                </>
              );
            })}
          </Container>
        </>
      )}
    </>
  );
};

export default ChatsPresenter;
const Container = styled.div`
  width: 100%;
  position: relative;
  top: 100px;
  padding: 15px;
  display: flex;
`;
const Profile = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
`;
const ProfileImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 40%;
    border: 1px solid #e7e7e7;
    margin-right: 10px;
  }
`;
const MeChatContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const My = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-color: #4a515c;
  color: #ffffff;
  border-radius: 50%;
  font-size: 10px;
  margin: 0px 5px;
`;
const Icons = styled.div`
  justify-content: center;
  img {
    margin: 0px 5px;
    width: 10px;
    height: 11px;
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
