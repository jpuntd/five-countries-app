const country = require('./country');
const countries = require('./countries');
const weather = require('./weather');
const currency = require ('./currency');

module.exports = app => {
  app.use('/country', country);
  app.use('/countries', countries);
  app.use('/weather', weather);
  app.use('/currency', currency);
}