import React from "react";
import styled from "styled-components";

const Nomobile = () => {
  return (
    <>
      <Container>
        <span>No mobile😥</span>
      </Container>
    </>
  );
};
export default Nomobile;

const Container = styled.div`
  position: absolute;
  z-index: 99;
  height: 1000vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 32px;
  top: 0;
  font-weight: bold;
  background-color: #fbe202;
  span {
    padding-top: 300px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
