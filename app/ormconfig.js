const path = require('path')
const { makeDirs } = require('./lib');
const config = require('./config.json');
const { User } = require('./entities/User');

/**
 * Configuration for
 * SQLite3 - https://github.com/mapbox/node-sqlite3
 * TypeORM - https://www.npmjs.com/package/typeorm
 */
const appHome = path.resolve(__dirname, '../..')
const dbFile = 'local.db';
const dbPath = `${appHome}${dbFile}`;
// make dirs in case they don't exist
makeDirs(appHome, dbFile);

console.log('Db paths: ', dbPath);

module.exports = {
  type: 'sqlite',
  database: dbPath,
  synchronize: true,
  autoSave: true,
  logging: true,
  entities: [User]
};