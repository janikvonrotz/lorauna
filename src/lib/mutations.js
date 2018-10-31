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

const UPDATE_CAPACITY_MESSAGE = gql`
mutation updateCapacityMessage($id: String!, $message: String, $percentage: Int) {
    updateCapacityMessage(id: $id, message: $message, percentage: $percentage) {
        success
    }
}
`

export {
    CREATE_VISITOR,
    UPDATE_SAUNA,
    UPDATE_CAPACITY_MESSAGE,
}