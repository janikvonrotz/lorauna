const fetch = require('node-fetch')

const resolvers = {
  Query: {
    allNews: async (root, args, context) => {
      const response = await fetch('http://saunalorrainebad.ch/wp-json/wp/v2/posts?_fields=id,title,link,date')
      const text = await response.text()
      const json = JSON.parse(text)
      return json.map(item => {
        item.title = item.title.rendered
        item.date = new Date(item.date)
        return item
      })
    }
  }
}

module.exports = resolvers
