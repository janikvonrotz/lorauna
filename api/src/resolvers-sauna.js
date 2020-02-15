const { prepare } = require('./helpers')
const { ObjectId } = require('mongodb')
const { collection } = require('@apland/mongo')

const resolvers = {
  Query: {
    allSaunas: async (root, args, context) => {
      return (await (await collection('sauna')).find({}).toArray()).map(prepare)
    },
    sauna: async (root, args, context) => {
      const filter = { _id: ObjectId(args.id) }
      return prepare(await (await collection('sauna')).findOne(filter))
    }
  },
  Sauna: {
    capacity_message: async (root, args, context) => {
      const percentage = (root.current_seats / root.max_seats * 100)
      let status = null
      if (percentage < 0) {
        status = (await (await collection('capacity_message')).find({ percentage: -1 }).toArray())[0]
      } else {
        status = (await (await collection('capacity_message')).find({ percentage: { $lte: percentage } }).sort({ percentage: -1 }).toArray())[0]
      }
      return (status ? status.message : 'untitled')
    },
    current_temperature: async (root, args, context) => {
      const temperature = (await (await collection('temperature')).find({ sauna_id: root._id }).sort({ created: -1 }).toArray())[0]
      return (temperature ? temperature.value : null)
    }
  },
  Mutation: {
    createSauna: async (root, args, context) => {
      args.created = new Date()
      const res = await (await collection('sauna')).insertOne(args)
      return prepare(res.ops[0])
    },
    updateSauna: async (root, args, context) => {
      args.updated = new Date()
      const filter = { _id: ObjectId(args.id) }
      delete args.id
      const res = await (await collection('sauna')).updateOne(filter, { $set: args })
      return { success: res.result.ok }
    },
    deleteSauna: async (root, args, context) => {
      if (args.id) {
        args._id = ObjectId(args.id)
        delete args.id
      }
      const res = await (await collection('sauna')).deleteOne(args)
      return { success: res.result.ok }
    }
  }
}

module.exports = resolvers
