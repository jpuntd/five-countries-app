const country = require('./country')
const countries = require('./countries')
//const weather = require('./weather')
module.exports = app => {
  app.use('/country', country);
  app.use('/countries', countries);
  app.use('/weather', weather)
  // etc..
}