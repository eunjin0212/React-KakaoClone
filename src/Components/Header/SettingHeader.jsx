import React from "react";
import styled from "styled-components";
import { Header } from "../BaseLabel";

import Search from "../../Screens/images/search.png";
import QRcode from "../../Screens/images/qrcode.png";
import Music from "../../Screens/images/music.png";
import Cog from "../../Screens/images/cog.png";

const SettingtHeader = () => {
  return (
    <>
      <SettingContainer>
        <Header title="더보기" style={{ color: "#191919" }} />
        <Icons>
          {<img src={Search} width="18px" height="18px" alt="" />}
          {<img src={QRcode} width="18px" height="18px" alt="" />}
          {<img src={Music} width="18px" height="18px" alt="" />}
          {<img src={Cog} width="18px" height="18px" alt="" />}
        </Icons>
      </SettingContainer>
    </>
  );
};
export default SettingtHeader;

const SettingContainer = styled.div`
  height: 40px;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  img {
    &:not(:last-child) {
      margin-right: 18px;
    }
  }
`;
