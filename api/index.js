const cors = require('micro-cors')()
const { ApolloServer } = require('apollo-server-micro')
const typeDefs = require('./src/schema')
const { merge } = require('lodash')
const resolvers = require('./src/resolvers')
const resolversCapacityMessage = require('./src/resolvers-capacity_message')
const resolversQuote = require('./src/resolvers-quote')
const resolversSauna = require('./src/resolvers-sauna')
const resolversTemperature = require('./src/resolvers-temperature')
const resolversVisitor = require('./src/resolvers-visitor')

// Load environment configuration
require('dotenv').config()

const server = new ApolloServer({
  typeDefs,
  resolvers: merge(
    resolvers,
    resolversCapacityMessage,
    resolversQuote,
    resolversSauna,
    resolversTemperature,
    resolversVisitor
  ),
  introspection: true,
  playground: true
})

module.exports = cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return
  }
  return server.createHandler({ path: '/api' })(req, res)
})
