import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "1c23b09ccc4460920d6372291080820c";

export const fetchWeather = async (city) => {
    const { data } = await axios.get(URL, {
        params: {
            q: city,
            units: "metric",
            APPID: API_KEY,
        },
    });
    return data;
};
