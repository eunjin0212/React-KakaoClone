import React from "react";
import styled from "styled-components";

import Search from "../../Assets/images/search.png";
import Left from "../../Assets/images/left.png";

const SettingHeaders = () => {
  return (
    <>
      <Setting>
        <img src={Left} alt="" />
        <div>설정</div>
        <img src={Search} alt="" />
      </Setting>
    </>
  );
};
const Setting = styled.div`
  position: fixed;
  height: 40px;
  align-items: center;
  background-color: white;
  top: 50px;
  left: 0;
  box-sizing: border-box;
  padding: 15px 15px 10px 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 18px;
    height: 18px;
  }
  div {
    font-size: 20px;
  }
`;
export default SettingHeaders;
