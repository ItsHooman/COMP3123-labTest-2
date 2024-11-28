import React, { useState, useEffect } from "react";
import axios from "axios"; 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null); 
  const [city, setCity] = useState("Toronto"); 
  const [searchCity, setSearchCity] = useState(""); 


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = "d8d1acb5d41c1d6c17e9ba441cb71e65";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; // API URL
        const response = await axios.get(url); 
        setWeatherData(response.data); 
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data. Please try again.");
      }
    };

    fetchWeather(); 
  }, [city]); 


  const handleSearch = () => {
    if (searchCity.trim() !== "") {
      setCity(searchCity);
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Check Weather</h2>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
          placeholder="Enter city name"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)} 
        />
        <button
          className="ml-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          onClick={handleSearch} 
        >
          Search
        </button>
      </div>
      {/* Display weather data if available */}
      {weatherData && (
        <div className="text-center">
          <h3 className="text-lg font-bold">{weatherData.name}</h3>
          <p className="text-sm text-gray-500">{weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="mx-auto"
          />
          <p className="text-3xl font-bold">{weatherData.main.temp}°C</p>
          <p className="text-sm">Feels like: {weatherData.main.feels_like}°C</p>
          <p className="text-sm">Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
