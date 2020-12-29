import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { shopping } from "./BaseContainer";
import undo from "../../Assets/images/undo.png";
import ohora from "../../Assets/images/ohora.jpg";
import ad2 from "../../Assets/images/ad2.jpg";
import hanger from "../../Assets/images/hanger.png";
import share from "../../Assets/images/share.png";

const Shopping = () => {
  return (
    <ShoppingContainer>
      <ShapHeader />
      <TopWrapper>
        {Object.values(shopping.title).map((title, i) => {
          return (
            <TopShopping>
              <a href={shopping.href[i]}>
                <img src={shopping.src[i]} alt="" />
                <Purchase>{shopping.purchase[i]}</Purchase>
                <div>{title}</div>
                <Deal>{shopping.deal[i]}</Deal>
              </a>
            </TopShopping>
          );
        })}
      </TopWrapper>
      <Refresh>
        <img src={undo} alt="" />
        새로 보기 1<span>/10</span>
      </Refresh>
      <a href="https://m.ohora.kr/product/list.html?cate_no=120&utm_source=kakao&utm_medium=da&utm_campaign=new_visit_mo_all&utm_content=visit&utm_term=Mobiletalk">
        <Ad>
          <img alt="" src={ohora} />
        </Ad>
      </a>
      {Object.values(shopping.adTitle).map((adTitle, i) => {
        return (
          <BottomWrapper>
            <div>{adTitle}</div>
            <img src={shopping.adSrc[i]} alt="" />
            <Content>{shopping.content[i]}</Content>
            <Divider></Divider>
          </BottomWrapper>
        );
      })}
      <a href="https://www.cjthemarket.com/mo/event/thebibigo">
        <Ad id="cjBibigo">
          <img alt="" src={ad2} />
        </Ad>
      </a>
      <Divider></Divider>
      <Style>
        <StyleHeader>
          <div style={{ display: "flex" }}>
            <img src={hanger} alt="" />
            <span>스타일 HOT 트렌드 상품</span>
          </div>
          <div>
            <img alt="" src={share} width="25px" />
          </div>
        </StyleHeader>
        <StyleContainer>
          {Object.values(shopping.styleStore).map((styleStore, i) => {
            return (
              <StyleContents>
                <a href={shopping.styleHref[i]}>
                  <img src={shopping.styleSrc[i]} alt="" />
                  <div style={{ boxSizing: "border-box" }}>
                    <span style={{ color: "red", marginRight: "5px" }}>
                      {styleStore}
                    </span>
                    <span>{shopping.styleTitle[i]}</span>
                  </div>
                </a>
              </StyleContents>
            );
          })}
        </StyleContainer>
      </Style>
    </ShoppingContainer>
  );
};
export default Shopping;
const ShoppingContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 90px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
  margin-bottom: 10px;
`;
const TopShopping = styled.div`
  font-size: 13px;
  img {
    width: 180px;
    height: 94px;
    border-radius: 10px;
  }
`;
const Purchase = styled.div`
  display: flex;
  position: relative;
  top: -90px;
  left: 8px;
  background-color: #f85b59;
  width: 70px;
  height: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 5px;
  color: white;
`;
const Deal = styled.div`
  color: #989898;
  margin-top: 10px;
`;
const Refresh = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #f5f5f5;
  padding: 8px 0px;
  margin-bottom: 15px;
  img {
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }
  span {
    color: #999999;
  }
`;
const Ad = styled.div`
  margin: 0px;
  padding: 0px;
  img {
    width: 100%;
  }
  margin: 0px -15px;
  &#cjBibigo {
    margin: -10px -15px;
  }
`;
const BottomWrapper = styled.div`
  margin: 10px 0px;
  img {
    margin-top: 10px;
    width: 100%;
  }
`;
const Content = styled.div`
  margin: 10px0px;
  color: #9d9d9d;
`;
const Divider = styled.div`
  height: 15px;
  margin: 0px -15px;
  border-bottom: 10px solid #efefef;
`;
const Style = styled.div`
  padding-bottom: 50px;
`;

const StyleHeader = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 10px;
  span {
    display: flex;
    align-items: center;
    margin-left: 6px;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    :last-child {
      border: 1px solid #e7e7e7;
    }
  }
`;
const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 10px;
`;
const StyleContents = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  margin: 10px 0px;
  img {
    width: 100%;
    height: 110px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  a {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
  span {
  }
`;
