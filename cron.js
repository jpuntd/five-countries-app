const storeCountryInfo = require('./services/country');
const { storeWeather } = require('./services/weather');

async function updateDb() {
    const countries = [
        'AUS',
        'BRA',
        'CHN',
        'GBR',
        'USA'
    ];
    try {
        await Promise.all(countries.map(storeCountryInfo));
    } catch (err) {
        console.error(err, 'occurred during update of the country info  ')
    }
    try {
        await Promise.all(countries.map(storeWeather));
    } catch (err) {
        console.error(err, 'occurred during update of the Weather info ')
    }
}

updateDb()