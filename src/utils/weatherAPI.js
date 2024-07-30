const axios = require("axios");

const getWeather = async (location) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather information");
  }
};

module.exports = { getWeather };




// require('dotenv').config();
// const axios = require('axios');

// const apiKey = process.env.WEATHERAPI_KEY;
// const city = 'London';
// const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// axios.get(url)
//   .then(response => {
//     console.log(`Weather in ${city}:`);
//     console.log(`Temperature: ${response.data.current.temp_c}°C`);
//     console.log(`Weather: ${response.data.current.condition.text}`);
//   })
//   .catch(error => {
//     console.error('Error fetching weather data:', error);
//   });
