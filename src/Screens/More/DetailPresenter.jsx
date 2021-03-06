import React from "react";
import styled from "styled-components";
import { User } from "../../Components/BaseComponent";
import ReactHooksCarousel from "react-hooks-carousel";
import Weather from "../../Components/Weather";
import MoreHeader from "../../Components/MoreHeader";

import Me from "../../Assets/images/bori-pro.jpg";
import KakaoCon from "../../Assets/images/kakaocon.png";
import PayImg from "../../Assets/images/clickComment.png";
import moreAd from "../../Assets/images/moreAd.jpg";
import img1 from "../../Assets/images/kakaowork.png";
import img2 from "../../Assets/images/kakao100.png";
import img3 from "../../Assets/images/mma.png";
import img4 from "../../Assets/images/kakaostory.png";

const DetailPresenter = ({ title, icons, loading, error }) => {
  const carousel = () => {
    return (
      <ReactHooksCarousel
        height="auto"
        width="100%"
        pictures={[img1, img2, img3, img4]}
        styleProp={{ borderRadius: "10px" }}
      />
    );
  };
  return (
    <DetailContainer>
      <MoreHeader />
      <Profile>
        <Box>
          <img src={Me} alt="" />
          <Info>
            <User name="김보리" style={{ fontSize: "18px" }} />
            <Items children="eunjin0212@naver.com" />
          </Info>
        </Box>
        <div style={{ display: "flex" }}>
          <Acount>My</Acount>
          <Acount>
            <img src={KakaoCon} alt="" />
            20
          </Acount>
        </div>
      </Profile>
      <KakaoPay>
        <Pay>
          <img src={PayImg} alt="" />
          <div>pay</div> 0원
        </Pay>
        <Property>
          송금 <div>|</div> 결제 <div>|</div> 자산
        </Property>
      </KakaoPay>
      <Grid>
        {Object.values(title.title).map((title, i) => {
          return (
            <>
              <Div>
                <Icons src={icons.src[i]} />
                <Title>{title}</Title>
              </Div>
            </>
          );
        })}
      </Grid>
      <MoreAd href="https://diorparfums.diorbeautyevent.co.kr/?utm_source=kakao&utm_content=display_missdior_sampling&utm_medium=display&utm_campaign=missdiorsampling_kr_dec20&dclid=CIe1mZDxz-0CFRdzYAodZ5ULSA">
        <img src={moreAd} alt="" />
      </MoreAd>
      <KakaoNow>
        <div>카카오 나우</div>
        {carousel()}
      </KakaoNow>
      <Weather />
    </DetailContainer>
  );
};
export default DetailPresenter;
const DetailContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 90px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const Div = styled.div`
  width: 100%;
  padding: 20px 0px;
  justify-content: center;
  font-size: 15px;
  text-align: center;
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  box-sizing: border-box;
`;
const Icons = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  }
`;
const Box = styled.div`
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 40%;
    border: 1px solid #e7e7e7;
    margin-right: 10px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Items = styled.div`
  color: #b5b5b5;
  font-size: 14px;
`;

const Acount = styled.div`
  display: flex;
  padding: 2px 15px;
  border: 1px solid #dfdfdf;
  border-radius: 40px;
  margin-right: 5px;
  font-size: 14px;
  align-items: center;
  :last-child {
    padding: 3px 10px;
    img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
`;

const KakaoPay = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
const Pay = styled.div`
  width: 90px;
  height: 30px;
  background-color: white;
  margin: 8px 15px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  justify-content: center;
  align-items: center;
  display: flex;
  div {
    font-weight: 900;
    margin: 0px 5px 5px 1px;
    font-family: -Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
  img {
    width: 10px;
    height: 10px;
  }
`;
const Property = styled.div`
  display: flex;
  margin-right: 15px;
  div {
    margin: 0px 3px;
    color: #dfdfdf;
  }
`;
const MoreAd = styled.a`
  padding-bottom: 20px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
const KakaoNow = styled.div`
  width: 100%;
  div {
    font-weight: 700;
    font-size: 15px;
    padding-bottom: 10px;
  }
`;
