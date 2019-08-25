const { Pool, Client } = require('pg');
const { dbConfig } = require('./dbconfig');

function query(sql, values) {
    const pool = new Pool(dbConfig);
    pool.on('error', (err, client) => console.error(err + ' occurred with client '+ client));
    return pool.query(sql, values);
}

module.exports = { query };