import React, { useState, useEffect } from "react";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";
import ReactAnimatedWeather from "react-animated-weather";

const Weather = (props) => {
  const geolocation = useGeolocation();
  const api = {
    key: "4658b2072b0daa8e1e75d5bbd6358604",
    baseUrl: "http://api.openweathermap.org/data/2.5/",
  };
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const defaults = {
    color: "black",
    size: 192,
    animate: true,
  };
  const getWeather = () => {
    axios
      .get(
        `${api.baseUrl}weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${api.key}&units=metric
    `
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setError({ message: "Error!!!" });
      });
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      <ReactAnimatedWeather
        icons={props.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      <div>
        {typeof weather.main != "undefined" ? (
          <>
            <div>
              {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt=""
              width="150px"
              height="150px"
            />
          </>
        ) : (
          <div>{error.message}</div>
        )}
      </div>
    </>
  );
};
export default Weather;
