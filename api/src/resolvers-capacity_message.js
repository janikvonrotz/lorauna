const { prepare } = require('./helpers')
const { ObjectId } = require('mongodb')
const { collection } = require('@apland/mongo')

const resolvers = {
  Query: {
    allCapacityMessages: async (root, args, context) => {
      return (await (await collection('capacity_message')).find({}).sort({ percentage: -1 }).toArray()).map(prepare)
    },
    capacityMessage: async (root, args, context) => {
      const filter = { _id: ObjectId(args.id) }
      return prepare(await (await collection('capacity_message')).findOne(filter))
    }
  },
  Temperature: {
    sauna: async (root, args, context) => {
      const filter = { _id: ObjectId(root.sauna_id) }
      return prepare(await (await collection('sauna')).findOne(filter))
    }
  },
  Mutation: {
    createCapacityMessage: async (root, args, context) => {
      args.created = new Date()
      const res = await (await collection('capacity_message')).insertOne(args)
      return prepare(res.ops[0])
    },
    updateCapacityMessage: async (root, args, context) => {
      args.updated = new Date()
      const filter = { _id: ObjectId(args.id) }
      delete args.id
      const res = await (await collection('capacity_message')).updateOne(filter, { $set: args })
      return { success: res.result.ok }
    },
    deleteCapacityMessage: async (root, args, context) => {
      if (args.id) {
        args._id = ObjectId(args.id)
        delete args.id
      }
      const res = await (await collection('capacity_message')).deleteOne(args)
      return { success: res.result.ok }
    }
  }
}

module.exports = resolvers
