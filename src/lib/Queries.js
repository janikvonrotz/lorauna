import gql from 'graphql-tag'

const CAPACITY_MESSAGE = gql`
query capacityMessage($id: String) {
    capacityMessage(id: $id) {
        message
    }
}
`
export { CAPACITY_MESSAGE }