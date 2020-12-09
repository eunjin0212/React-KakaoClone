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

export const Chatings = ({ src, name, img, icons, style, children }) => {
  return (
    <>
      <Name>{name}</Name>
      <Items>{children}</Items>
      <UIcons src={src} style={style}>
        {icons}
      </UIcons>
    </>
  );
};
Chatings.propTypes = {
  name: PropTypes.node,
  children: PropTypes.node,
  icons: PropTypes.node,
};

const Items = styled.div``;
const Title = styled.div`
  font-size: 20px;
  margin-right: 14px;
`;
const Name = styled.div`
  height: 100%;
  font-size: 15px;
  display: flex;
  margin-right: 5px;
  align-items: center;
`;
const UIcons = styled.div``;
