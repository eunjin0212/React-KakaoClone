import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";

const Entertain = () => {
  return (
    <>
      {console.log(Entertain)}
      <Container>
        <ShapHeader />
      </Container>
    </>
  );
};
export default Entertain;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;
