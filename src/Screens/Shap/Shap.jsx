import React from "react";
import styled from "styled-components";
import { Container } from "../../Components/BaseLabel";
import axios from "axios";

import Ad from "../images/ad.jpg";
import News1 from "../images/news1.png";

const News = () => {
  const newsStyle = () => {
    return {
      fontSize: "13px",
      padding: "10px",
      borderBottom: "1px solid #F7F7F7`",
    };
  };
  //   const api = axios.create({
  //     baseURL: "https://api.openweathermap.org/data/2.5/",
  //     params:
  //       api_key: "4658b2072b0daa8e1e75d5bbd6358604",
  //       city: "Seoul",
  //     ,
  //

  return (
    <>
      <NewsContainer>
        <AdContainer>
          <img src={Ad} alt="" />
        </AdContainer>
        <Covid>
          <span>확진환자 42,766</span>
          <span>▲ 1,030</span>
          <span>12.13 0시 기준</span>
        </Covid>
        <Container
          title="신규확진 1천명 넘어..인구 몰린 수도권, 집단감염 '급속도'"
          style={newsStyle()}
        />
        <Container
          title="박능후'3단계 상향 검토 착수..지금이 3단계 막을 마지막 기회'"
          style={newsStyle()}
        />
        <Container
          title="'코로나 전사'지원한 국시거부 의대생들..'정부와 화해 모드'"
          style={newsStyle()}
        />
        <NewsBox>
          <NewsPhoto>
            <a href="  https://imnews.imbc.com/replay/2020/nwdesk/article/6026449_32524.html">
              <img src={News1} alt="" />
              <span>'예배 끝나고 식사'무더기 확진.. 교도소까지 곳곳 감염</span>
            </a>
          </NewsPhoto>
          <NewsPhoto>
            <a href="  https://imnews.imbc.com/replay/2020/nwdesk/article/6026449_32524.html">
              <img src={News1} alt="" />
              <span>'예배 끝나고 식사'무더기 확진.. 교도소까지 곳곳 감염</span>
            </a>
          </NewsPhoto>
        </NewsBox>
      </NewsContainer>
    </>
  );
};
export default News;
const NewsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
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
const Covid = styled.div`
  align-items: center;
  border-bottom: 9px solid #efefef;
  padding-bottom: 15px;
  span:not(:last-child) {
    font-size: 14px;
    margin-right: 5px;
  }
  span:nth-child(2) {
    color: red;
  }
  span:last-child {
    color: #9c9c9c;
    font-size: 10px;
  }
`;
const NewsBox = styled.div`
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  width: 100%;
`;
const NewsPhoto = styled.div`
  width: 48%;

  a {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
  img {
    height: 92px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  span {
  }
`;
const Weather = styled.div``;
