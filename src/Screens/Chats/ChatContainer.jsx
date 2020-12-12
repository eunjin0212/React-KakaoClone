import React, { useState, useEffect } from "react";
import ChatsPresenter from "./ChatPresenter";

const ChatContainer = () => {
  const [title] = useState({ title: ["MEMO", "김은진", "단톡방"] });

  const [content] = useState({ message: ["나와의 채팅"] });
  const [time] = useState({
    time: ["어제"],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!title && !content && !time) {
        setLoading(true);
      }
    } catch (error) {
      setError({ error: "에러가 났어요😥" });
    } finally {
      setLoading(false);
    }
  }, [title, content, time]);

  return (
    <>
      <ChatsPresenter title={title} content={content} time={time} />
    </>
  );
};

export default ChatContainer;
