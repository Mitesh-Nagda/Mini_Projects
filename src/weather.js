import React, { useState, useEffect } from "react";
function WeatherApp() {
  const [city, setCity] = useState("Jamnagar");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = "5840116bf07b5625750ead51e218f98a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, [city]);

  return (
    <div className="conatainer mt-5">
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      {weather && weather.main && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{weather.name}</h5>
            <p className="card-text">
              Temp : {weather.main.temp} <sup>0</sup>C
            </p>
            <p className="card-text">
              Contdition : {weather.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
