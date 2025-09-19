import { useEffect, useState } from "react";
import axios from "axios";

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/weather?city=${city}`)
      .then((res) => {
        setWeather(res.data);
        setError("");
      })
      .catch(() => {
        setError("City not found or backend not running.");
        setWeather(null);
      });
  }, [city]);

  return (
    <div className="weather-box">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <>
          <h2>{weather.city}</h2>
          <p>🌡️ Temperature: {weather.temperature} °C</p>
          <p>💧 Humidity: {weather.humidity} %</p>
          <p>☁️ Condition: {weather.condition}</p>
        </>
      )}
    </div>
  );
}

export default Weather;
