const axios = require('axios');
const db = require('../db/init');

function getCountryInfo(country_code) {
    return axios('https://restcountries.eu/rest/v2/alpha/' + country_code)
}

function selectValues(response) {
    let { alpha3Code, name, callingCodes, capital, population, currencies, flag } = response.data;
    return [alpha3Code, name, callingCodes[0], capital, population, currencies[0].code, flag];
}

function dbCountryInfo(info) {
    const sql = `INSERT INTO countries(code, name, calling_code, capital, population, currency, flag) 
        VALUES($1, $2, $3, $4, $5, $6, $7) 
        ON CONFLICT (code) DO NOTHING`;
    return db.query(sql, info);
}
function storeCountryInfo(country_code) {
    return getCountryInfo(country_code)
        .then(res => dbCountryInfo(selectValues(res)))
        .then(res => console.log(`Country info for ${country_code} stored in the database`))
        .catch(err => console.error(err));
}

module.exports = storeCountryInfo;