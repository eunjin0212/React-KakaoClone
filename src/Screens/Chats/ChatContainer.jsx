import React, { useState } from "react";
import ChatsPresenter from "./ChatPresenter";

const ChatContainer = () => {
  const [title, setTitle] = useState({
    user: [""],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  try {
    setTitle({ user: ["김은진"] });
  } catch (e) {
    setError({ e: "에러가 났어요😥" });
  } finally {
    setLoading({ loading: false });
  }

  return (
    <>
      <ChatsPresenter>{title.user}</ChatsPresenter>
    </>
  );
};

export default ChatContainer;
