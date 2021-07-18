const pg = require('pg-promise');

const pgp = pg({
    noWarnings: true,
})
const envConfig = require('../../config.json');

const postgresConnection = pgp(`postgres://${envConfig.connection.user}:${envConfig.connection.password}@${envConfig.connection.host}:${envConfig.connection.port}/${envConfig.connection.database}`)
module.exports = postgresConnection;
