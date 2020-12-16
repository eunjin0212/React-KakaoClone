import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(null);
  const API_KEY = "4658b2072b0daa8e1e75d5bbd6358604"; //내 위치
  const COORDS = "coords";
  const baseUrl = "https://api.openweathermap.org/data/2.5/";

  const getWeather = (lat, lon) => {
    fetch(
      `${baseUrl}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang={kr}`
    )
      .then(function (response) {
        console.log(response.json);
        return response.json();
      })
      .then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        setWeather(`${temperature} \n ${place}`);
      });
  };
  useEffect(() => {
    getWeather();
  }, []);
  const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  };

  const weatherSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude: latitude,
      longitude: longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  };
  const weatherError = () => {
    setError("위치 정보를 얻을 수 없습니다.");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(weatherSuccess, weatherError);
  };

  const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parsedCoords = JSON.parse(loadedCoords);
      getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
  };
  const init = () => {
    loadCoords();
  };
  init();
  return (
    <>
      <div>{weather}</div>
    </>
  );
};
export default Weather;
