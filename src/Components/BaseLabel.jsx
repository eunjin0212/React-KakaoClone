import PropTypes from "prop-types";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const FriendsChatHeader = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Items>{children}</Items>
    </>
  );
};
FriendsChatHeader.propTypes = {
  title: PropTypes.node,
  children: PropTypes.object,
};

const Items = styled.div``;
const Title = styled.div`
  margin-right: 14px;
  font-size: 20px;
`;

export default FriendsChatHeader;
