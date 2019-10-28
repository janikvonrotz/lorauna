const cors = require('micro-cors')()
const { ApolloServer } = require('apollo-server-micro')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    formatError: error => {
        console.log(error)
        return error
    },
    formatResponse: response => {
        console.log(response)
        return response
    },
})

module.exports = cors((req, res) => {
    if (req.method === 'OPTIONS') {
      res.end()
      return
    }
    return server.createHandler({ path: '/api' })(req, res)
})