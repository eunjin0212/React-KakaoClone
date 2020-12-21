import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";

const SportsContainer = ({
  sports,
  img,
  num,
  time,
  company,
  loading,
  error,
}) => (
  <>
    {loading ? (
      <Loading />
    ) : (
      <>
        <Container>
          {console.log(sports)}
          {Object.values(sports.sports).map((sports, i) => (
            <>
              <div>{sports}</div>
            </>
          ))}
        </Container>
      </>
    )}
  </>
);
export default SportsContainer;
const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
