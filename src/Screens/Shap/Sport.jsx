import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { sports } from "./BaseContainer";

const Sports = () => {
  return (
    <SportsWrapper>
      <ShapHeader />
      {Object.values(sports.title).map((title, i) => {
        return (
          <Contents>
            <a href={sports.herf[i]}>
              <News>
                <div>{title}</div>
                <div>{sports.company[i]}</div>
              </News>
              <div>
                <img src={sports.img[i]} alt="" />
              </div>
            </a>
          </Contents>
        );
      })}

      <AdContants>
        <FrameWrapper>
          <a href="#/https://pf.kakao.com/_rAMaxb/61509273">
            <AdText className="ad-text">
              <div>생로랑 2021 컬렉션</div>
              <Ad className="ad">
                <span>Ad</span>
              </Ad>
            </AdText>
          </a>
          <iframe
            width="100%"
            height="100%"
            title="2021 여성 여름 컬렉션"
            src="https://play-tv.kakao.com/embed/player/cliplink/414913798?service=player_share&autoplay=1"
            scrolling="no"
            allow="autoplay"
          />
        </FrameWrapper>
      </AdContants>
    </SportsWrapper>
  );
};
export default Sports;
const SportsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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

const AdContants = styled.div`
  width: 100%;
  height: 100%;
  top: 330px;
  margin-bottom: 80px;
  position: relative;
  cursor: pointer;
  top: 0;
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
