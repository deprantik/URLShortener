const configs = require('../config.json');
import knex from 'knex';


console.log(`SETUP: database`, configs);

const db = knex(configs);

console.log(`RUNNING: setup-database.js NODE_ENV=development`);

Promise.all([db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')]);

console.log(`FINISHED: setup-database.js NODE_ENV=development`);