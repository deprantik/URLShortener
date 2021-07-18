const pg = require('pg-promise');

const pgp = pg({
    noWarnings: true,
})
const envConfig = require('../../config.json');

const postgresConnection = pgp(`postgres://${envConfig.postgres.username}:${envConfig.postgres.password}@${envConfig.postgres.host}:${envConfig.postgres.port}/${envConfig.postgres.database}`)
module.exports = postgresConnection;
