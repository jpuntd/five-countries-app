const Router = require('express-promise-router');
const db = require('../db/init');
const router = new Router();
// export  router to be mounted by the parent application
module.exports = router;

router.get('/:country_code', async (req, res) => {
  const { country_code } = req.params;
  const { rows } = await db.query('SELECT * FROM countries WHERE code = $1', [country_code]);
  res.send(rows[0]);
});