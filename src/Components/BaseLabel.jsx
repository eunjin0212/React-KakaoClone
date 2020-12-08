import PropTypes from "prop-types";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

export const FriendsHeader = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Items>{children}</Items>
    </>
  );
};
FriendsHeader.propTypes = {
  title: PropTypes.node,
  children: PropTypes.object,
};
export const ChatHeader = ({ title, children }) => {
  return (
    <>
      <Btn>{title}</Btn>
      <div>{children}</div>
    </>
  );
};
ChatHeader.propTypes = {
  title: PropTypes.node,
  children: PropTypes.object,
};

const Title = styled.div`
  color: #191919;
  font-size: 20px;
`;

const Items = styled.div``;
const Btn = styled.button`
  background-color: inherit;
  border: none;
  margin-right: 14px;
  font-size: 20px;
`;
