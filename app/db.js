/* eslint global-require: 0, flowtype-errors/show-errors: 0 */
const { createConnection } = require('typeorm')
const ormconfig = require('./ormconfig')
const { User } = require('./entities/User')

// const connectionOptions = getConnectionOptions(ormconfig)

const db = {}

console.log('db.js __dirname', __dirname)

createConnection(ormconfig)
  .then(async connection => {
    // const userRepository = await connection.getRepository(User)
    db.userFindAll = async options => {
      console.log('connection userFindAll')
      const userRepository = await connection.getRepository(User)
      const result = await userRepository.find(options)
      return result
    }

    db.userCreate = async user => {
      console.log('connection userCreate', user)
      const userRepository = await connection.getRepository(User)
      await userRepository.save(user)
      return [user]
    }
  })

module.exports = db