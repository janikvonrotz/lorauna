const { prepare } = require('./helpers')
const { ObjectId } = require('mongodb')
const { collection } = require('@apland/mongo')

const resolvers = {
  Query: {
    allQuotes: async (root, args, context) => {
      return (await (await collection('quote')).find({}).sort({ created: -1 }).toArray()).map(prepare)
    },
    dailyQuote: async (root, args, context) => {
      // Get all quotes
      const quotes = (await (await collection('quote')).find({}).toArray()).map(prepare)
      // Get current date
      const now = new Date()
      // Retrieve config
      var config = await (await collection('config')).findOne({ id: 'quote' })

      // Check if config has been set
      if (config && config.day) {
        // Compare dates
        const diffTime = Math.abs(now - config.day)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        // Update config if more than one day has passed
        if (diffDays > 1) {
          // Set new random counter from current quotes length
          config.counter = Math.floor(Math.random() * quotes.length)
          // Set time to morning
          config.day = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 0, 0)
          // Update config
          try {
            await (await collection('config')).updateOne({ id: 'quote' }, { $set: config })
          } catch (err) {
            console.log(err)
          }
        }
      } else {
        // Set config object
        config = {
          id: 'quote'
        }
        // Set new random counter from current quotes length
        config.counter = Math.floor(Math.random() * quotes.length)
        // Set time to morning
        config.day = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 0, 0)
        // Save new config
        try {
          await (await collection('config')).insertOne(config)
        } catch (err) {
          console.log(err)
        }
      }

      // Return daily quote
      return quotes[config.counter]
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
      const filter = { _id: ObjectId(args._id) }
      delete args._id
      const res = await (await collection('quote')).updateOne(filter, { $set: args })
      return { success: res.result.ok }
    },
    deleteQuote: async (root, args, context) => {
      if (args._id) {
        args._id = ObjectId(args._id)
      }
      const res = await (await collection('quote')).deleteOne(args)
      return { success: res.result.ok }
    }
  }
}

module.exports = resolvers
