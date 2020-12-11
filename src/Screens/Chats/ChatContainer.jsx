import React, { useState } from "react";
import ChatsPresenter from "./ChatPresenter";

import Me from "../../Screens/images/bori-pro.jpg";
import Others from "../../Screens/images/profile.png";
import Loading from "../Loading";

const ChatContainer = () => {
  const [title] = useState({
    user: [""],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  try {
  } catch (e) {
    setError({ e: "에러가 났어요😥" });
  } finally {
    setLoading({ loading: false });
  }

  return (
    <>
      <ChatsPresenter>
        {Object.values(title.user).map((user) => {
          return (
            <>
              <div>{user}</div>
            </>
          );
        })}
      </ChatsPresenter>
    </>
  );
};

export default ChatContainer;
