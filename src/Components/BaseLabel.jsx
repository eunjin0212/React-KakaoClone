import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Container = ({ style, title, children }) => {
  return (
    <>
      <Title style={style}>{title}</Title>
      <Items>{children}</Items>
    </>
  );
};
Container.propTypes = {
  title: PropTypes.node,
  children: PropTypes.object,
  style: PropTypes.object,
};
export const User = ({ style, name, children }) => {
  return (
    <>
      <Name style={style}>{name}</Name>
      <Items>{children}</Items>
    </>
  );
};
User.propTypes = {
  name: PropTypes.node,
  children: PropTypes.node,
};
const Items = styled.div``;
const Title = styled.div`
  font-size: 20px;
  margin-right: 14px;
`;
const Name = styled.div`
  height: 100%;
  display: flex;
`;
