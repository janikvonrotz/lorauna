import gql from 'graphql-tag'

const CAPACITY_MESSAGE = gql`
query capacityMessage($id: String) {
    capacityMessage(id: $id) {
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
        name
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
{
    allVisitors{
        _id
        value
        created
        sauna {
            name
        }
    }
}
`

export { 
    CAPACITY_MESSAGE,
    ALL_CAPACITY_MESSAGES,
    SAUNA,
    ALL_SAUNAS,
    ALL_VISITORS,
}