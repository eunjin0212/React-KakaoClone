import React from "react";
import styled from "styled-components";

import Me from "../images/bori-pro.jpg";

const FriendContainer = styled.div``;
const Profile = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 40%;
  }
`;

const FriendsContainer = () => {
  return (
    <>
      <FriendContainer>
        <Profile>
          <img src={Me} alt="" />
        </Profile>
      </FriendContainer>
    </>
  );
};

export default FriendsContainer;
