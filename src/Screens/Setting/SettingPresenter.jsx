import React from "react";
import styled from "styled-components";
import Loading from "../Loading";

const SettingPresenter = ({ title, content, icons, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SettingContainer>
            {Object.values(title.title).map((title, i) => {
              return (
                <>
                  <Div>
                    <div style={{ display: "flex" }}>
                      <Icons src={icons.src[i]} />
                      <Title>{title}</Title>
                    </div>
                    <Content>{content.message[i]}</Content>
                  </Div>
                </>
              );
            })}
          </SettingContainer>
        </>
      )}
    </>
  );
};
export default SettingPresenter;
const SettingContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 0px;
  justify-content: space-between;
  font-size: 18px;
  div {
    &:not(:nth-child(3, 11, 12)) {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  :last-child {
    margin-bottom: 50px;
  }
  div {
    &:nth-child(3) {
      border-bottom: 1px solid #e3e3e3;
    }
  }
`;
const Icons = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 20px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  color: #848484;
`;
