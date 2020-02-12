const cors = require('micro-cors')()
const { ApolloServer } = require('apollo-server-micro')
const { typeDefs } = require('./src/schema')
const resolvers = require('./src/resolvers')
const { merge } = require('lodash')
const resolversVisitor = require('./src/resolvers-visitor')

// Load environment configuration
require('dotenv').config()

const server = new ApolloServer({
  typeDefs,
  resolvers: merge(
    resolvers,
    resolversVisitor
  ),
  introspection: true,
  playground: true
  // formatError: error => {
  //   console.log(error)
  //   return error
  // },
  // formatResponse: response => {
  //   console.log(response)
  //   return response
  // }
})

module.exports = cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return
  }
  return server.createHandler({ path: '/api' })(req, res)
})
