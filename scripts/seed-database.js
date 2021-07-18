import knex from 'knex';

const configs = require('../config.json');

const environment = 'development';
const envConfig = configs

console.log(`SETUP: database`, envConfig);

const db = knex(envConfig);

console.log(`RUNNING: seed-database.js NODE_ENV=${environment}`);

// --------------------------
// SCRIPTS
// --------------------------

const createRedirectionTable = db.schema.createTable('redirectionsV2', function(table) {
  table
    .increments('id')
    .primary()
    .unique()
    .notNullable()

  table
    .string('fromUrl')
    .unique()
    .notNullable();

  table
    .string('toUrl')
    .notNullable();

  table
    .timestamp('createdAt')
    .notNullable()
    .defaultTo(db.raw('now()'));

  table
    .timestamp('updatedAt')
    .notNullable()
    .defaultTo(db.raw('now()'));

  table
    .boolean('isActive')
    .nullable()
    .defaultTo(true);

  table
    .integer('hit')
    .nullable()
    .defaultTo(0);
});

// --------------------------
// RUN
// --------------------------

Promise.all([createRedirectionTable]);

console.log(`FINISHED: seed-database.js NODE_ENV=${environment}`);