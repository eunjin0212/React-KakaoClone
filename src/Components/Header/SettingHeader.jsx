import React from "react";
import styled from "styled-components";

import Search from "../../Screens/images/search.png";
import QRcode from "../../Screens/images/qrcode.png";
import Music from "../../Screens/images/music.png";
import Cog from "../../Screens/images/cog.png";

const SettingContainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 47px;
  align-items: center;
  background-color: white;
`;
const SettingHeaders = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;
const SettingText = styled.div`
  font-size: 20px;
  color: #191919;
`;

const SettingIcons = styled.div`
  display: flex;
  align-items: center;
`;
const SettingItems = styled.div`
  &:not(:last-child) {
    margin-right: 18px;
  }
`;

const SettingtHeader = () => {
  return (
    <>
      <SettingContainer>
        <SettingHeaders>
          <SettingText>더보기</SettingText>

          <SettingIcons>
            <SettingItems>
              <img src={Search} width="18px" height="18px" alt="" />
            </SettingItems>
            <SettingItems>
              <img src={QRcode} width="18px" height="18px" alt="" />
            </SettingItems>
            <SettingItems>
              <img src={Music} width="18px" height="18px" alt="" />
            </SettingItems>
            <SettingItems>
              <img src={Cog} width="18px" height="18px" alt="" />
            </SettingItems>
          </SettingIcons>
        </SettingHeaders>
      </SettingContainer>
    </>
  );
};
export default SettingtHeader;
