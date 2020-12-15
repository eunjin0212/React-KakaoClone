import React from "react";
import styled from "styled-components";
import { User } from "../../Components/BaseLabel";
import Loading from "../Loading";

//images
import Me from "../images/bori-pro.jpg";

const FriendsPresenter = ({
  title,
  content,
  num,
  sign,
  img,
  loading,
  error,
}) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FriendContainer>
          <Profile>
            <img src={Me} alt="" />
            <User
              name="김보리"
              style={{ alignItems: "center", height: "100%" }}
            />
          </Profile>

          <Box>
            {Object.values(title.title).map((title, i) => {
              return (
                <>
                  <FriendsMain>
                    <FriendsText>
                      <div>{title}</div>
                      <div>^</div>
                    </FriendsText>
                    <FriendsMainHeader>
                      <FriendsFront>
                        <Image src={img.src[i]} />
                        <div>{content.content[i]}</div>
                      </FriendsFront>
                      <FriendsRear>
                        {num.num[i]}
                        <div>{sign.sign[i]}</div>
                      </FriendsRear>
                    </FriendsMainHeader>
                  </FriendsMain>
                </>
              );
            })}
          </Box>
        </FriendContainer>
      )}
    </>
  );
};

export default FriendsPresenter;
//styles
const FriendContainer = styled.div`
  width: 100%;
  position: relative;
  top: 100px;
  padding: 15px;
`;
const Profile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 40%;
    border: 1px solid #e7e7e7;
    margin-right: 10px;
  }
`;

const Box = styled.div`
  margin: 10px 0px;
`;
const FriendsMain = styled.div`
  padding: 10px 0px;
  border-top: 1px solid #ececec;
`;
const FriendsText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
  color: #a1a1a1;
`;
const FriendsMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FriendsFront = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid #e7e7e7;
  border-radius: 40%;
  margin-right: 5px;
`;
const FriendsRear = styled.div`
  display: flex;
  color: #a1a1a1;
`;
