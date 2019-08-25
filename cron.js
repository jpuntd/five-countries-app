const moment = require('moment');
const { storeCountryInfo } = require('./services/country');
const { storeWeather } = require('./services/weather');
const { storeExchangeRates, datesBetween } = require('./services/currency');

(async function () {
    const countries = [
        'AUS',
        'BRA',
        'CHN',
        'GBR',
        'USA'
    ];
    // get information from restcountries.eu api and store in the database
    try {
        await Promise.all(countries.map(storeCountryInfo));
    } catch (err) {
        console.error(err, 'occurred during update of the country info.')
    }
    // get weather data from openweathermap.org api and store in the database
    try {
        await Promise.all(countries.map(storeWeather));
    } catch (err) {
        console.error(err, 'occurred during update of the weather info.')
    }
    // get exchange rate information from fixer.io api and store in the database
    try {
        await Promise.all(
            datesBetween(moment().subtract(5, 'days'), moment())
                .map(storeExchangeRates));
    } catch (err) {
        console.error(err, 'occurred during update of the exchange rates')
    }
})();