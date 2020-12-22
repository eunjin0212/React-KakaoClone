import React from "react";
import PropTypes from "prop-types";
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
const Title = styled.div``;
const Items = styled.div``;
