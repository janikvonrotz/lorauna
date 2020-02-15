const { prepare } = require('./helpers')
const { ObjectId } = require('mongodb')
const { collection } = require('@apland/mongo')

const resolvers = {
  Query: {
    allTemperatures: async (root, args, context) => {
      return (await (await collection('temperature')).find({}).sort({ created: -1 }).limit(args.limit || 36).toArray()).map(prepare).reverse()
    }
  },
  Temperature: {
    sauna: async (root, args, context) => {
      const filter = { _id: ObjectId(root.sauna_id) }
      return prepare(await (await collection('sauna')).findOne(filter))
    }
  },
  Mutation: {
    createTemperature: async (root, args, context) => {
      args.created = new Date()
      const res = await (await collection('temperature')).insertOne(args)

      // delete  all entries older than 1 day
      // const deletionDate = new Date((new Date()).getTime() - (24 * 60 * 60 * 1000))
      // temperatureColl.deleteMany({created: {$lt: deletionDate}})

      // get the referenced sauna
      const filter = { _id: ObjectId(args.sauna_id) }
      res.ops[0].sauna = await (await collection('sauna')).findOne(filter)
      return prepare(res.ops[0])
    }
  }
}

module.exports = resolvers
