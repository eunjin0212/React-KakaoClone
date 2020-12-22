import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";

const Fun = () => {
  console.log(Fun);
  return (
    <Container>
      <ShapHeader />
    </Container>
  );
};
export default Fun;
const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
`;
