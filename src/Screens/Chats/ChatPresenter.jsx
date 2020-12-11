import React from "react";
import styled from "styled-components";
import Loading from "../Loading";
import PropTypes from "prop-types";

import Me from "../../Screens/images/bori-pro.jpg";
import Others from "../../Screens/images/profile.png";
import userEvent from "@testing-library/user-event";

const ChatsPresenter = ({ title, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container>{"김은진"}</Container>
        </>
      )}
    </>
  );
};
ChatsPresenter.propTypes = {
  title: PropTypes.node,
  loading: PropTypes.bool,
  error: PropTypes.string,
};
export default ChatsPresenter;
const Container = styled.div`
  font-size: 14px;
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 40%;
  border: 1px solid #e7e7e7;
  margin-right: 10px;
`;
