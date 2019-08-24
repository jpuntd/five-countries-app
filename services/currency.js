require('dotenv').config()
const axios = require('axios');
const moment = require('moment')

async function currencyRates(day = Date(), symbols = ['USD,AUD,CAD,PLN,MXN']) {
    const params = {
        access_key: process.env.FIXER_API_KEY,
        base: 'EUR',
        symbols: symbols.join(',')
    };
    
    const endpoint = 'http://data.fixer.io/api/' + moment(day).format('YYYY-MM-DD');

    let response = await axios.get(endpoint, { params })
    console.log(response)
}

currencyRates(moment('2019-04-26','YYYY-MM-DD'))


