import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Error from './Error'
import Loading from './Loading'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ALL_CAPACITY_MESSAGES = gql`
{
    allCapacityMessages{
        _id
        percentage
        message
    }
}
`

const CapacityMessagesList = () => (
    <Query query={ALL_CAPACITY_MESSAGES}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <List>
                    {data.allCapacityMessages.map((capacityMessage) => (
                        <ListItem key={capacityMessage._id}>
                            <ListItemText primary={capacityMessage.message} secondary={`${capacityMessage.percentage}% Nachricht`} />
                        </ListItem>
                    ))}
                </List>
            )
        }}
    </Query>
)

export default CapacityMessagesList