require('dotenv').config()
const axios = require('axios');
const moment = require('moment');
const db = require('../db/init.js');

function getRates(day = Date(), symbols = ['USD', 'AUD', 'CNY', 'BRL', 'GBP']) {
    const endpoint = 'http://data.fixer.io/api/' + moment(day).format('YYYY-MM-DD');
    const params = {
        access_key: process.env.FIXER_API_KEY,
        base: 'EUR',
        symbols: symbols.join(',')
    };
    return axios.get(endpoint, { params });
}

function selectValues({ data }) {
    let { AUD, BRL, CNY, GBP, USD } = data.rates;
    return [data.date, AUD, BRL, CNY, GBP, USD];
}

function dbRates(values) {
    const sql = `INSERT INTO exchangerates(date, aud, brl, cny, gbp, usd) 
        VALUES($1, $2, $3, $4, $5, $6) 
        ON CONFLICT (date) DO NOTHING
        `;
    return db.query(sql, values);
}

function storeExchangeRates(date) {
    return getRates(date)
        .then(res => dbRates(selectValues(res)))
        .then(res => console.log(`Rates for ${date} stored in the database`))
        .catch(err => console.error(err));
}

function datesBetween(startDate, endDate = Date()) {
    let now = startDate.clone(), dates = [];
    while (now.isSameOrBefore(endDate)) {
        dates.push(now.format('YYYY-MM-DD'));
        now.add(1, 'days');
    }
    return dates;
}

console.log(datesBetween(moment().subtract(5, 'days'), moment()));

(async function () {
    await Promise.all(
    datesBetween(moment().subtract(5, 'days'), moment())
    .map(storeExchangeRates)
    );
})();
