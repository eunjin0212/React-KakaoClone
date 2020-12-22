import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";

const KakaoTV = () => {
  console.log(KakaoTV);
  return (
    <Container>
      <ShapHeader />
      <div>카카오티비야</div>
    </Container>
  );
};
export default KakaoTV;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;
