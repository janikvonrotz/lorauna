import gql from 'graphql-tag'

const CREATE_VISITOR = gql`
mutation createVisitor($value: Int!, $sauna_id: String!) {
    createVisitor(value: $value, sauna_id: $sauna_id) {
        _id
    }
}
`
const UPDATE_SAUNA = gql`
mutation updateSauna($id: String!, $name: String, $max_seats: Int) {
    updateSauna(id: $id, name: $name, max_seats: $max_seats) {
        success
    }
}
`

const CLOSE_SAUNA = gql`
mutation closeSauna($id: String!) {
    closeSauna(id: $id) {
        success
    }
}
`

const UPDATE_CAPACITY_MESSAGE = gql`
mutation updateCapacityMessage($id: String!, $message: String, $percentage: Int) {
    updateCapacityMessage(id: $id, message: $message, percentage: $percentage) {
        success
    }
}
`

const UPDATE_QUOTE = gql`
mutation updateQuote($id: String!, $quote: String!, $author: String) {
    updateQuote(id: $id, quote: $quote, author: $author) {
        success
    }
}
`

const DELETE_QUOTE = gql`
mutation deleteQuote($id: String!) {
    deleteQuote(id: $id) {
        success
    }
}
`

export {
  CREATE_VISITOR,
  UPDATE_SAUNA,
  UPDATE_CAPACITY_MESSAGE,
  CLOSE_SAUNA,
  UPDATE_QUOTE,
  DELETE_QUOTE
}
