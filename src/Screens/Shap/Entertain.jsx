import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { entertain } from "./BaseContainer";
import share from "../../Assets/images/share.png";

const Entertain = () => {
  const clickHandle = (style) => {
    return (style = { border: "2px solid #FBE20F" });
  };

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
          <span>카카오TV 오리지널</span>
          <div>
            <img src={share} alt="" />
          </div>
        </VideoHeader>
        <MainVideo>
          <iframe
            title="찐경규"
            width="100%"
            height="100%"
            src={`${"https://www.youtube.com/embed/nulT3_l3D9U"}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </MainVideo>

        <VideoList>
          <Video onClick={clickHandle()}>
            {/* <iframe
              id="mainVideo"
              title="찐경규 고독한 톡방"
              width="125"
              height="80"
              src="https://www.youtube.com/embed/LcfXj2HJIyY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            /> */}
            <span>찐경규</span>
          </Video>
          <Video>
            {/* <iframe
              title="videoList"
              width="125"
              height="80"
              src="https://www.youtube.com/embed/r-UQJRaZd5M"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            /> */}
          </Video>
          <Video>
            {/* <iframe
              title="며느라기"
              width="125"
              height="80"
              src="https://www.youtube.com/embed/iJeTMgHLIcA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            /> */}
            <span>며느라기</span>
          </Video>
          <Video>
            {/* <iframe
              title="도시남녀"
              width="125"
              height="80"
              src="https://www.youtube.com/embed/nUoTvAFThK4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            /> */}
            <span>도시남녀</span>
          </Video>
          <Video>
            {/* <iframe
              title="런웨이"
              width="125"
              height="80"
              src="https://www.youtube.com/embed/9w1WAQPbGNY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            /> */}
            <span>런웨이</span>
          </Video>
          <MoreView>더보기</MoreView>
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
  top: 90px;
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
const VideoWrapper = styled.div`
  margin-bottom: 80px;
`;
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
const MainVideo = styled.div`
  margin: 0px -15px;
  padding-bottom: 10px;
  display: flex;
  height: 350px;
`;
const VideoList = styled.div`
  display: flex;
  box-sizing: content-box;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-color: white;
  cursor: pointer;
`;
const Video = styled.button`
  display: flex;
  flex-direction: column;
  background: inherit;
  border: none;
  :not(:last-child) {
    margin-right: 10px;
  }
  iframe {
    border-radius: 10px;
  }
`;
const MoreView = styled.button`
  border: 1px solid gray;
`;
