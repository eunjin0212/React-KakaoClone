import React from "react";
import styled from "styled-components";
import kakaoIcon from "../Screens/images/kakaoTalk-icon.png";

const Container = styled.div``;
const Background = styled.div``;
const Image = styled.img``;

const Loading = () => {
  return (
    <Container>
      <Background>
        <Image src={kakaoIcon} />
      </Background>
    </Container>
  );
};

export default Loading;
