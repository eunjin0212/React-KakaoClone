import React, { useState, useEffect } from "react";
import { Api401, Api404, Api429 } from "./ErrorMsg";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";
import styled from "styled-components";

const Weather = (props) => {
  const geolocation = useGeolocation();
  const api = {
    key: "4658b2072b0daa8e1e75d5bbd6358604",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  let lat = geolocation.latitude;
  let lon = geolocation.longitude;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWeather = (latitude, longitude) => {
    axios
      .get(
        `${api.baseUrl}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metriclang=ko
    `
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch(function (error) {
        let errorMsg = console.log(error);
        setWeather("");
        setError({ message: `Error : ${errorMsg}` });
      });
  };
  useEffect(() => {
    getWeather(lat, lon);
  }, []);
  return (
    <>
      <div style={{ fonSize: "14px", marginBottom: "10px", fontWeight: 700 }}>
        날씨
      </div>
      {typeof weather.main != "undefined" ? (
        <>
          <WeatherContainer>
            <WeatherIcon>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt=""
              />
            </WeatherIcon>
            <Temperature>
              {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
            </Temperature>
          </WeatherContainer>
        </>
      ) : (
        <ErrorMsg>
          {error.message}
          {((<Api401 />), (<Api404 />), (<Api429 />))}
        </ErrorMsg>
      )}
    </>
  );
};
export default Weather;
const WeatherContainer = styled.div`
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid gray;
`;
const WeatherIcon = styled.div``;
const Temperature = styled.div``;
const ErrorMsg = styled.div`
  padding-bottom: 50px;
`;
