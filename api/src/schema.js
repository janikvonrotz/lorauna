const { gql } = require('apollo-server-micro')

const typeDefs = gql`

scalar Date

type Response {
    success: Boolean
    message: String
}

type CapacityMessage {
    _id: String
    created: Date
    updated: Date
    percentage: Int
    message: String
}

type Sauna {
    _id: String
    created: Date
    updated: Date
    name: String
    max_seats: Int
    current_seats: Int
    capacity_message: String
    current_temperature: Float
}

type Temperature {
    _id: String
    created: Date
    value: Float
    sauna: Sauna
}

type Visitor {
    _id: String
    created: Date
    sauna: Sauna
    value: Int
    current_seats: Int
}

type Quote {
    _id: String
    created: Date
    quote: String
    author: String
}

type Query {
    allSaunas: [Sauna]
    sauna(id: String): Sauna
    allTemperatures(limit: Int): [Temperature]
    allVisitors(limit: Int): [Visitor]
    allCapacityMessages: [CapacityMessage]
    capacityMessage(id: String): CapacityMessage
    allQuotes: [Quote]
}

type Mutation {
    createSauna(name: String, max_seats: Int, current_seats: Int): Sauna
    updateSauna(id: String, name: String, max_seats: Int, current_seats: Int): Response
    deleteSauna(id: String, name: String): Response

    createCapacityMessage(percentage: Int, message: String): CapacityMessage
    updateCapacityMessage(id: String, percentage: Int, message: String): Response
    deleteCapacityMessage(id: String): Response

    createTemperature(value: Float, sauna_id: String): Temperature

    createVisitor(value: Int, sauna_id: String): Visitor

    createQuote(quote: String, author: String): Quote
    updateQuote(id: String, quote: String, author: String): Response
    deleteQuote(id: String): Response
}
`

module.exports = typeDefs
