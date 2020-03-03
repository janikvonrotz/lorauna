const fetch = require('node-fetch')

const resolvers = {
  Query: {
    aareTemperature: async (root, args, context) => {
      const response = await fetch('https://aareguru.existenz.ch/v2018/current?city=bern')
      const text = await response.text()
      const json = JSON.parse(text)
      return {
        value: json.aare.temperature,
        quote: json.aare.temperature_text
      }
    }
  }
}

module.exports = resolvers
