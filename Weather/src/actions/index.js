import Axios from 'axios';

const API_KEY = '421f7425d05ff39d562803a38cde74d8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = Axios.get(url);

    return request.then(response => {
        return {
            type: FETCH_WEATHER,
            payload: response
        }
    }).catch(error => ({
        type: FETCH_WEATHER_ERROR,
        payload: error
    }))
}
