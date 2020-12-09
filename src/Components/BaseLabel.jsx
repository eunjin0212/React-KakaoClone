import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Header = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Items>{children}</Items>
    </>
  );
};
Header.propTypes = {
  title: PropTypes.node,
  children: PropTypes.object,
};

const Items = styled.div``;
const Title = styled.div`
  margin-right: 14px;
  font-size: 20px;
`;
