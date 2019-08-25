const Router = require('express-promise-router');
const db = require('../db/init');
const moment = require('moment');
const router = new Router();
// export  router to be mounted by the parent application
module.exports = router;

router.get('/:date', async (req, res) => {
    const param = req.params.date;
    const endDate = (param === 'now') ? moment() : moment(param);
    const startDate = endDate.clone().subtract(5, 'days');
    const response = await db.query('SELECT * FROM exchangerates WHERE date BETWEEN $1 AND $2 ORDER BY date ASC', [startDate, endDate]);
    let rates = response.rows.map(item => ({ ...item, shortdate: moment(item.date).format('MM-DD') }));
    res.send(rates);
});