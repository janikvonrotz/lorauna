const { prepare } = require('./helpers')
const { ObjectId } = require('mongodb')
const { collection } = require('@apland/mongo')

const resolvers = {
  Query: {
    allQuotes: async (root, args, context) => {
      return (await (await collection('quote')).find({}).sort({ created: -1 }).toArray()).map(prepare)
    }
  },
  Mutation: {
    createQuote: async (root, args, context) => {
      args.created = new Date()
      const res = await (await collection('quote')).insertOne(args)
      return prepare(res.ops[0])
    },
    updateQuote: async (root, args, context) => {
      args.updated = new Date()
      const filter = { _id: ObjectId(args.id) }
      delete args.id
      const res = await (await collection('quote')).updateOne(filter, { $set: args })
      return { success: res.result.ok }
    },
    deleteQuote: async (root, args, context) => {
      if (args.id) {
        args._id = ObjectId(args.id)
        delete args.id
      }
      const res = await (await collection('quote')).deleteOne(args)
      return { success: res.result.ok }
    }
  }
}

module.exports = resolvers
