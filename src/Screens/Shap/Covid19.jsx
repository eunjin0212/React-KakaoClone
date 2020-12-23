import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { covid19 } from "./BaseContainer";

const Entertain = () => {
  return (
    <Covid19VWrapper>
      <ShapHeader />
      {Object.values(covid19.title).map((title, i) => {
        return <Container>{title}</Container>;
      })}
    </Covid19VWrapper>
  );
};
export default Entertain;
const Covid19VWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const Container = styled.div``;
