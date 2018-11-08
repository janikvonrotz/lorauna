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
const ALL_TEMPERATURES = gql`
{
    allTemperatures {
        _id
        value
        created
        sauna {
            name
        }
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
}