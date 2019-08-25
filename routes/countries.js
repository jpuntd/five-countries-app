const Router = require('express-promise-router');
const db = require('../db/init');
const router = new Router();
// export  router to be mounted by the parent application
module.exports = router;

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM countries', []);
  res.send(rows);
});