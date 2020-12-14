import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  const [title] = useState({
    title: [""],
  });

  const [content] = useState({
    message: [""],
  });

  const [icons] = useState({
    pin: [""],
    bell: [""],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = () => {
    try {
      if (!title && !content) {
        return setLoading(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <DetailPresenter
        title={title}
        content={content}
        icons={icons}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default DetailContainer;
