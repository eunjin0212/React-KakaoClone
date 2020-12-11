import React from "react";
import styled from "styled-components";
import Loading from "../Loading";

const ChatsPresenter = ({ title, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container>
            {Object.values(title.user).map((user) => {
              return (
                <>
                  <div user="김은진" />
                </>
              );
            })}
          </Container>
        </>
      )}
    </>
  );
};

export default ChatsPresenter;
const Container = styled.div`
  font-size: 14px;
`;
