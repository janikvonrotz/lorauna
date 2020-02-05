const { prepare } = require('./helpers')
const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { ObjectId } = require('mongodb')
const mongo = require('mongo')

const saunaColl = async() => {
    const db = await mongo()
    return await db.collection('sauna')
}

const visitorColl = async() => {
    const db = await mongo()
    return await db.collection('visitor')
}

const temperatureColl = async() => {
    const db = await mongo()
    return await db.collection('temperature')
}

const capacityMessageColl = async() => {
    const db = await mongo()
    return await db.collection('capacity_message')
}

const resolvers = {
  Query: {
      allSaunas: async (root, args, context) => {
          return (await (await saunaColl()).find({}).toArray()).map(prepare)
      },
      allVisitors: async (root, args, context) => {
          return (await (await visitorColl()).find({}).limit(args.limit || 10).sort({created: -1}).toArray()).map(prepare).reverse()
      },
      allTemperatures: async (root, args, context) => {
          return (await (await temperatureColl()).find({}).sort({created: -1}).limit(args.limit || 36).toArray()).map(prepare).reverse()
      },
      allCapacityMessages: async (root, args, context) => {
          return (await (await capacityMessageColl()).find({}).sort({percentage: -1}).toArray()).map(prepare)
      },
      sauna: async (root, args, context) => {
          let filter = { _id: ObjectId(args.id) }
          return prepare(await (await saunaColl()).findOne(filter))
      },
      capacityMessage: async (root, args, context) => {
          let filter = { _id: ObjectId(args.id) }
          return prepare(await (await capacityMessageColl()).findOne(filter))
      },
  },
  Temperature: {
      sauna: async (root, args, context) => {
          let filter = { _id: ObjectId(root.sauna_id) }
          return prepare(await (await saunaColl()).findOne(filter))
      },
  },
  Visitor: {
      sauna: async (root, args, context) => {
          let filter = { _id: ObjectId(root.sauna_id) }
          return prepare(await (await saunaColl()).findOne(filter))
      },
  },
  Sauna: {
      capacity_message: async (root, args, context) => {
          let percentage = (root.current_seats / root.max_seats * 100)
          let status = null
          if (percentage < 0) {
            status = (await (await capacityMessageColl()).find({percentage:  -1 }).toArray())[0]
          } else {
            status = (await (await capacityMessageColl()).find({percentage: { $lte: percentage }}).sort({percentage: -1}).toArray())[0]
          }
          return (status ? status.message : 'untitled')
      },
      current_temperature: async (root, args, context) => {
          let temperature = (await (await temperatureColl()).find({sauna_id: root._id}).sort({created: -1}).toArray())[0]
          return (temperature ? temperature.value : null)
      },
  },
  Mutation: {
      createSauna: async (root, args, context) => {
          args.created = new Date()
          let res = await (await saunaColl()).insertOne(args)
          return prepare(res.ops[0])
      },
      updateSauna: async (root, args, context) => {
          args.updated = new Date()
          let filter = { _id: ObjectId(args.id) }
          delete args.id
          let res = await (await saunaColl()).updateOne(filter, { $set: args })
          return { success: res.result.ok }
      },
      deleteSauna: async (root, args, context) => {
          if(args.id) {
              args._id = ObjectId(args.id)
              delete args.id
          }
          let res = await (await saunaColl()).deleteOne(args)
          return { success: res.result.ok }
      },
      createCapacityMessage: async (root, args, context) => {
          args.created = new Date()
          let res = await (await capacityMessageColl()).insertOne(args)
          return prepare(res.ops[0])
      },
      updateCapacityMessage: async (root, args, context) => {
          args.updated = new Date()
          let filter = { _id: ObjectId(args.id) }
          delete args.id
          let res = await (await capacityMessageColl()).updateOne(filter, { $set: args })
          return { success: res.result.ok }
      },
      deleteCapacityMessage: async (root, args, context) => {
          if(args.id) {
              args._id = ObjectId(args.id)
              delete args.id
          }
          let res = await (await capacityMessageColl()).deleteOne(args)
          return { success: res.result.ok }
      },
      createVisitor: async (root, args, context) => {
          args.created = new Date()

          // get the sauna and update the current seat value
          let filter = { _id: ObjectId(args.sauna_id) }
          let sauna = await (await saunaColl()).findOne(filter)
          sauna.current_seats += args.value
          args.current_seats = sauna.current_seats

          // check min and max seats
          if(sauna.current_seats < -1) {
              throw new Error('Die Anzahl Besucher darf nicht kleiner als -1 sein.')
          }
          if(sauna.current_seats > sauna.max_seats) {
              throw new Error('Die Anzahl Besucher hat die maximal zulässige Anzahl überschritten.')
          }

          let res = await (await saunaColl()).updateOne(filter, { $set: sauna })

          res = await (await visitorColl()).insertOne(args)
          res.ops[0].sauna = sauna
          return prepare(res.ops[0])
      },
      createTemperature: async (root, args, context) => {
          args.created = new Date()
          let res = await (await temperatureColl()).insertOne(args)

          // delete  all entries older than 1 day
          let deletionDate = new Date((new Date()).getTime() - (24*60*60*1000))
          // temperatureColl.deleteMany({created: {$lt: deletionDate}})

          // get the referenced sauna
          let filter = { _id: ObjectId(args.sauna_id) }
          res.ops[0].sauna = await (await saunaColl()).findOne(filter)
          return prepare(res.ops[0])
      },
  },
  Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
          return new Date(value) // value from the client
      },
      serialize(value) {
          return value.toUTCString() // value sent to the client
      },
      parseLiteral(ast) {
          if (ast.kind === Kind.INT) {
              return new Date(ast.value) // ast value is always in string format
          }
          return null
      },
  }),
}

module.exports = { resolvers }