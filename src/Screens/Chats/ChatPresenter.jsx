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
            {Object.values(title).map((title, i) => {
              return (
                <>
                  <Profile>
                    <div>{title}</div>
                  </Profile>
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
  width: 100%;
  position: relative;
  top: 100px;
  padding: 15px;
  display: flex;
`;
const Profile = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
`;
