const { Pool, Client } = require('pg');
const db_config = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'report',
  password: 'postgress',
  port: 5432,
};

function query(sql, values) {
    const pool = new Pool(db_config);
    pool.on('error', (err, client) => console.error(err + ' occurred with client '+ client));
    return pool.query(sql, values);
}

module.exports = { query };