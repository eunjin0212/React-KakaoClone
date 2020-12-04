import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = () => {
  function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return hour + ":" + minutes;
  }

  return getTime();
};

export default Header;
