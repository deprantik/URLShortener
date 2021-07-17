const Sequelize = require('sequelize');
const pg = require('pg-promise');

const Op = Sequelize.Op;
const pgp = pg({
    noWarnings: true,
})
// const basename = path.basename(module.filename);
const db = {};
const envConfig = require('../../config.json');
// const MODELS_PATH = `${require.resolve('data-models').split('index.js')[0]}models`;
// const env = process.env.APP_ENV;
// const MAX_POOL = process.env.NODE_ENV === 'development' ? 5 : 40;

const postgresConnection = pgp(`postgres://${envConfig.postgres.username}:${envConfig.postgres.password}@${envConfig.postgres.host}:${envConfig.postgres.port}/${envConfig.postgres.database}`)

// Object.keys(db).forEach((modelName) => {
// 	if (db[modelName].associate) {
// 		db[modelName].associate(db);
// 	}
// });

console.log("======db", db);
db.postgresConnection = postgresConnection;
// db.postgresConnection.sync();
db.Sequelize = Sequelize;
db.Op = Op;
module.exports = postgresConnection;
