const Router = require('express-promise-router');
const db = require('../db/init');
const router = new Router();
// export  router to be mounted by the parent application
module.exports = router;

router.get('/', async (req, res) => {
    const sql = `SELECT AVG(windspeed) as windspeed, AVG(temp) as temp from weather WHERE date = $1`;
    let day = '2019-08-24';
    const { rows } = await db.query(sql, day);
    res.send(rows);
});