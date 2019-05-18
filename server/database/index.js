const initOptions = {
    promiseLib: Promise
};

const pgp = require('pg-promise')(initOptions);

const cn = 'postgres://postgres:@localhost:5432/postgres';

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;
