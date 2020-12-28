import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { fun } from "./BaseContainer";
import { BasePost } from "../../Components/BaseComponent";
import fun1 from "../../Assets/images/fun1.png";
import fun2 from "../../Assets/images/fun2.jpg";

const Entertain = () => {
  return (
    <FunWrapper>
      <ShapHeader />
      {Object.values(fun.title).map((title, i) => {
        return (
          <Container>
            <TopContents id={`top${i}`}>
              <a href={fun.href[i]}>{title}</a>
            </TopContents>
          </Container>
        );
      })}
      <Divider id="divider"></Divider>
      <PhotoContents>
        <PhotoWrapper>
          <a href="https://1boon.kakao.com/kinolights/5fe18ca72f1b3e12b3c1eb47?view=katalk">
            <img src={fun2} alt="" />
            <span>PD가 진짜 사귀는 줄 알았다고 걱정한 이 배우</span>
          </a>
        </PhotoWrapper>
        <PhotoWrapper>
          <a href="https://m.cafe.daum.net/ilovenba/34Xk/386762?svc=kakaotalkTab">
            <img src={fun1} alt="" />
            <span>걸그룹 실물에 화들짝</span>
          </a>
        </PhotoWrapper>
      </PhotoContents>
      <Divider id="divider"></Divider>
      <AdContants className="video">
        <FrameWrapper>
          <a href="https://www.ww1984.co.kr/?tickets">
            <AdText className="ad-text">
              <div>원더우먼 1984</div>
              <Ad className="ad">
                <span>Ad</span>
              </Ad>
            </AdText>
          </a>
          <iframe
            title="원더우먼 1984"
            width="100%"
            height="315px"
            src="https://www.youtube.com/embed/AAPAGnERPjw"
            allow="autoplay"
            frameBorder="0"
          />
        </FrameWrapper>
      </AdContants>
      <div style={{ margin: "175px 0px" }}></div>
      {Object.values(fun.bottomTitle).map((bottomTitle, i) => {
        return (
          <Contents className="fun-news">
            <a href={fun.bottomHref[i]}>
              <News>
                <div>{bottomTitle}</div>
                <div>{fun.bottomompany[i]}</div>
              </News>
              <div>
                <img src={fun.bottomSrc[i]} alt="" />
              </div>
            </a>
          </Contents>
        );
      })}
    </FunWrapper>
  );
};
export default Entertain;
const FunWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 90px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div``;
const TopContents = styled.div`
  :not(#top4) {
    border-bottom: 1px solid #efefef;
  }
  padding: 8px 0px;
  font-size: 14px;
`;
const Divider = styled.div`
  height: 15px;
  margin: 0px -15px;
  border-bottom: 10px solid #efefef;
`;
const PhotoContents = styled.div`
  display: flex;
  font-size: 13px;
  padding: 15px 0px;
`;
const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  a {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
  img {
    height: 92px;
    width: 96%;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  span {
  }
`;
const AdContants = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  top: 10px;
  left: 0;
`;
const FrameWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  top: 0;
  :hover {
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
  }
  :hover .ad-text {
    opacity: 1;
    color: #fefeff;
  }
  :hover .ad {
    color: #f6f6f7;
    opacity: 1;
  }
`;
const AdText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: space-between;
`;
const Ad = styled.div`
  text-align: center;
  opacity: 0;
  transition: all 0.6s linear;
  span {
    border: 1px solid #797a7e;
    border-radius: 5px;
    padding: 0px 5px;
  }
`;
const Contents = styled.div`
  border-top: 1px solid #f5f5f5;
  a {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
  }
  /* ~ :last-child {
    padding-bottom: 50px;
  } */
  img {
    width: 110px;
    height: 77px;
    border-radius: 5px;
  }
  ~ :last-child {
    padding-bottom: 50px;
  }
`;
const News = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > :first-child {
    font-size: 15px;
    margin-bottom: 10px;
  }
  > :last-child {
    color: #9f9f9f;
    font-size: 12px;
  }
`;
