const { prepare } = require('./helpers')
const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { ObjectId } = require('mongodb')
const { collection } = require('@apland/mongo')

const resolvers = {
  Query: {
    allSaunas: async (root, args, context) => {
      return (await (await collection('sauna')).find({}).toArray()).map(prepare)
    },
    allTemperatures: async (root, args, context) => {
      return (await (await collection('temperature')).find({}).sort({ created: -1 }).limit(args.limit || 36).toArray()).map(prepare).reverse()
    },
    allCapacityMessages: async (root, args, context) => {
      return (await (await collection('capacity_message')).find({}).sort({ percentage: -1 }).toArray()).map(prepare)
    },
    sauna: async (root, args, context) => {
      const filter = { _id: ObjectId(args.id) }
      return prepare(await (await collection('sauna')).findOne(filter))
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
    },
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
    },
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
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue (value) {
      return new Date(value) // value from the client
    },
    serialize (value) {
      return value.toUTCString() // value sent to the client
    },
    parseLiteral (ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null
    }
  })
}

module.exports = resolvers
