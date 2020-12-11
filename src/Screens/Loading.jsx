import React from "react";
import styled from "styled-components";
import kakaoIcon from "../Screens/images/kakaoTalk-icon.png";

const Loading = () => {
  return (
    <LoadingContainer>
      <Background>
        <Image src={kakaoIcon} />
      </Background>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  background-color: #fbe202;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Background = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 73px;
  height: 73px;
`;
