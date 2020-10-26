import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'dbd5c1d5c69ef5ac818b23da00d7a3bb'

export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })

    return data;
}