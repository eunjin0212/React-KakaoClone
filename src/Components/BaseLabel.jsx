import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Header = ({ style, title, children }) => {
  return (
    <>
      <Title style={style}>{title}</Title>
      <Items>{children}</Items>
    </>
  );
};
Header.propTypes = {
  title: PropTypes.node,
  children: PropTypes.object,
  style: PropTypes.object,
};

const Items = styled.div``;
const Title = styled.div`
  font-size: 20px;
  margin-right: 14px;
`;
