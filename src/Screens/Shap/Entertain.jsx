import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { entertain } from "./BaseContainer";
import share from "../../Assets/images/share.png";

const Entertain = () => {
  return (
    <EnterWrapper>
      <ShapHeader />
      {Object.values(entertain.title).map((title, i) => {
        return (
          <Contents className="fun-news">
            <a href={entertain.herf[i]}>
              <News>
                <div>{title}</div>
                <div>{entertain.company[i]}</div>
              </News>
              <div>
                <img src={entertain.img[i]} alt="" />
              </div>
            </a>
          </Contents>
        );
      })}
      <VideoWrapper>
        <VideoHeader>
          <span>카카오TV오리지널</span>
          <div>
            <img src={share} alt="" />
          </div>
        </VideoHeader>
        <iframe
          title="찐경규"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/nulT3_l3D9U"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <VideoList>
          <div>영상1</div>
          <div>영상2</div>
          <div>영상3</div>
          <div>영상4</div>
          <div>영상5</div>
          <div>더보기</div>
        </VideoList>
      </VideoWrapper>
    </EnterWrapper>
  );
};
export default Entertain;
const EnterWrapper = styled.div`
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
const VideoWrapper = styled.div``;
const VideoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  font-size: 14px;
  img {
    border: 1px solid #9f9f9f;
    border-radius: 50%;
    padding: 1px;
    width: 20px;
    height: 20px;
  }
`;
const VideoList = styled.div`
  display: flex;
  box-sizing: content-box;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-color: white;
  cursor: pointer;
`;
