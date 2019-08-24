require('dotenv').config();
const axios = require('axios');
const db = require('../db/init');
const moment = require('moment');

function getWeather(dest) {
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather';
    const params = {
        APPID: process.env.WEATHER_API_KEY,
        units: 'metric',
        q: dest
    };
    return axios(endpoint, { params });
}

function selectValues({ data }, country_code) {
    return [
        country_code,
        moment.unix(data.dt).format('YYYY-MM-DD'),
        data.weather.map(item => item.description).join(', '),  // Weather description
        data.main.temp,                // Temperature
        data.main.temp_min,               // Minimum Temperature
        data.main.temp_max,               // Maximum Temperature
        data.wind.speed                // Wind speed
    ];
}

function dbWeather(values) {
    const sql = `INSERT INTO weather(country_code, date, weather_description, temp, temp_min, temp_max, windspeed) 
    VALUES($1, $2, $3, $4, $5, $6, $7) 
    `;
    return db.query(sql, values);
}

function storeWeather(country_code) {
    // we need to convert 3 character code (eg GRB) to 2 character code anyway
    // let's store capital in the lookup table as well
    const capital = {
        AUS: 'Canberra, AU',
        BRA: 'Brasilia, BR',
        CHN: 'Beijing, CN',
        GBR: 'London, UK',
        USA: 'Washington DC., USA'
    }

    return getWeather(capital[country_code])
        .then(res => dbWeather(selectValues(res, country_code)))
        .then(res => console.log(`Weather info for ${country_code} stored in the database`))
        .catch(err => console.error(err));
}

module.exports = { storeWeather }

