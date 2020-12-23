import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { kakaoTv } from "./BaseContainer";

const Entertain = () => {
  return (
    <KakaoTVWrapper>
      <ShapHeader />
      {Object.values(kakaoTv.title).map((title, i) => {
        return <Container>{title}</Container>;
      })}
    </KakaoTVWrapper>
  );
};
export default Entertain;
const KakaoTVWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const Container = styled.div``;
