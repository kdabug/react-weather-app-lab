import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q=";

async function getWeather(zip) {
  try {
    const weather = await axios(
      `${BASE_URL}${zip},us&units=imperial&appid=053a7650f87c76d09503df6648d5a922
      `
    );
    return weather;
  } catch (error) {
    console.error(error);
  }
}

export default getWeather;
