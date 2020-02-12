const { prepare } = require('./helpers')
const { ObjectId } = require('mongodb')
const { collection } = require('@apland/mongo')
const { UserInputError } = require('apollo-server-micro')
const resolvers = {
  Query: {
    allVisitors: async (root, args, context) => {
      return (await (await collection('visitor')).find({}).limit(args.limit || 10).sort({ created: -1 }).toArray()).map(prepare).reverse()
    }
  },
  Mutation: {
    createVisitor: async (root, args, context) => {
      args.created = new Date()

      // get the sauna and update the current seat value
      const filter = { _id: ObjectId(args.sauna_id) }
      const sauna = await (await collection('sauna')).findOne(filter)
      sauna.current_seats += args.value
      args.current_seats = sauna.current_seats

      // check min and max seats
      if (sauna.current_seats < -1) {
        throw new UserInputError('Die Anzahl Besucher darf nicht kleiner als -1 sein.')
      }
      if (sauna.current_seats > sauna.max_seats) {
        throw new UserInputError('Die Anzahl Besucher hat die maximal zulässige Anzahl überschritten.')
      }

      let res = await (await collection('sauna')).updateOne(filter, { $set: sauna })

      res = await (await collection('visitor')).insertOne(args)
      res.ops[0].sauna = sauna
      return prepare(res.ops[0])
    }
  },
  Visitor: {
    sauna: async (root, args, context) => {
      const filter = { _id: ObjectId(root.sauna_id) }
      return prepare(await (await collection('sauna')).findOne(filter))
    }
  }
}

module.exports = resolvers
