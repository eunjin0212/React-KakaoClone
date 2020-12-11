import React, { useState, useEffect } from "react";
import ChatsPresenter from "./ChatPresenter";

const ChatContainer = () => {
  const [title] = useState({ title: ["MEMO", "김은진", "단톡방"] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!title) {
        setLoading(true);
      }
    } catch (error) {
      setError({ error: "에러가 났어요😥" });
    } finally {
      setLoading(false);
    }
  }, [title]);

  return (
    <>
      <ChatsPresenter title={title} />
    </>
  );
};

export default ChatContainer;
