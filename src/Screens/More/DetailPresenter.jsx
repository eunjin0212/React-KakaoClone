import React from "react";
import styled from "styled-components";
import Loading from "../Loading";

import { Container } from "../../Components/BaseLabel";

const DetailPresenter = ({ title, content, icons, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailContainer>
            <Container title="더보기"></Container>
            {Object.values(title.title).map((title, i) => {
              return (
                <>
                  <Div>
                    <div style={{ display: "flex" }}>
                      <Icons />
                      <Title>{title}</Title>
                    </div>
                    <Content>{}</Content>
                  </Div>
                </>
              );
            })}
          </DetailContainer>
        </>
      )}
    </>
  );
};
export default DetailPresenter;
const DetailContainer = styled.div`
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
  padding: 20px 0px;
  justify-content: space-between;
  font-size: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }
  :last-child {
    margin-bottom: 50px;
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
