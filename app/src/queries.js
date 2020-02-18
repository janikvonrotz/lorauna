import gql from 'graphql-tag'

const CAPACITY_MESSAGE = gql`
query capacityMessage($id: String) {
    capacityMessage(id: $id) {
        _id
        message
    }
}
`

const ALL_CAPACITY_MESSAGES = gql`
{
    allCapacityMessages{
        _id
        percentage
        message
    }
}
`

const SAUNA = gql`
query sauna($id: String) {
    sauna(id: $id) {
        _id
        name
        max_seats
    }
}
`

const ALL_SAUNAS = gql`
{
    allSaunas {
        name
        max_seats
        current_seats
        _id
        capacity_message
    }
}
`

const ALL_VISITORS = gql`
query allVisitors($limit: Int) {
    allVisitors(limit: $limit) {
        _id
        value
        created
        sauna {
            name
        }
        current_seats
    }
}
`

const ALL_TEMPERATURES = gql`
query allTemperatures($limit: Int) {
    allTemperatures(limit: $limit) {
        _id
        value
        created
        sauna {
            name
        }
    }
}
`

const ALL_QUOTES = gql`
query allQuotes {
    allQuotes {
        _id
        quote
        author
    }
}
`

const CREATE_QUOTE = gql`
mutation createQuote(
    $quote: String
    $author: String
) {
    createQuote(
        quote: $quote
        author: $author
    ) {
        _id
    }
}
`

const UPDATE_QUOTE = gql`
mutation updateQuote(
    $_id: String
    $quote: String
    $author: String
) {
    updateQuote(
        _id: $_id
        quote: $quote
        author: $author
    ) {
        success
    }
}
`

const DELETE_QUOTE = gql`
mutation deleteQuote($_id: String) {
    deleteQuote(_id: $_id) {
        success
    }
}
`

const NOTIFICATION = gql`
{
    notification @client
    notification_id @client
}
`

export {
  CAPACITY_MESSAGE,
  ALL_CAPACITY_MESSAGES,
  SAUNA,
  ALL_SAUNAS,
  ALL_VISITORS,
  NOTIFICATION,
  ALL_TEMPERATURES,
  ALL_QUOTES,
  CREATE_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE
}
