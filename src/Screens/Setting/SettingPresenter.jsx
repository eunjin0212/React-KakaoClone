import React from "react";
import styled from "styled-components";
import SettingHeader from "../../Components/SettingHeader";

const SettingPresenter = ({ title, content, icons, loading, error }) => {
  return (
    <SettingContainer>
      <SettingHeader />
      {Object.values(title.title).map((title, i) => (
        <Wrapper>
          <Div>
            <div style={{ display: "flex" }}>
              <Icons src={icons.src[i]} />
              <Title>{title}</Title>
            </div>
            <Content>{content.message[i]}</Content>
          </Div>
        </Wrapper>
      ))}
    </SettingContainer>
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
const Wrapper = styled.div`
  &:last-child {
    padding-bottom: 50px;
  }
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  justify-content: space-between;
  font-size: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }

  &:nth-child(8n + 3) {
    border-bottom: 1px solid #e3e3e3;
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
