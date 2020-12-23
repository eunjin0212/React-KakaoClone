import React from "react";
import styled from "styled-components";
import ShapHeader from "../../Components/ShapHeader";
import { entertain } from "./BaseContainer";

const Entertain = () => {
  return (
    <EnterWrapper>
      <ShapHeader />
      {Object.values(entertain.title).map((title, i) => {
        return <Container>{title}</Container>;
      })}
    </EnterWrapper>
  );
};
export default Entertain;
const EnterWrapper = styled.div`
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
