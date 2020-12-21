import React, { useState, useEffect } from "react";
import Shap from "./NewsPresenter";
import sports1 from "../../Assets/images/sports1.jpg";
import sports2 from "../../Assets/images/sports2.jpg";
import SportsPresenter from "./SportsPresenter";

const ShapContainer = () => {
  const sports = {
    sports: [
      "손흥민 푸스카스상이 기쁜 토트넘, SON 가족사진까지 공개",
      "'푸스카스다!'SON 드리블에 장난기 발동한 토트넘 선수들.. 빵⋯",
    ],
  };
  const num = { num: [1, 2] };
  const time = { time: ["4시간 전", "17시간 전"] };
  const company = { company: ["인터풋볼", "인터풋볼"] };
  const img = { img: [sports1, sports2] };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = () => {
    try {
      if (!sports) {
        return setLoading(true);
      }
    } catch (error) {
      setError({ error: "Error!!" });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <SportsPresenter
        sports={sports}
        img={img}
        num={num}
        time={time}
        company={company}
        loading={loading}
        error={error}
      />
      <Shap loading={loading} error={error} />
    </>
  );
};
export default ShapContainer;
