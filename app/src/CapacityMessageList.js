import React from 'react'
import { Query } from 'react-apollo'
import Error from './Error'
import Loading from './Loading'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import { ALL_CAPACITY_MESSAGES } from './queries'

const CapacityMessagesList = () => (
  <Query query={ALL_CAPACITY_MESSAGES}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />

      return (
        <List>
          {data.allCapacityMessages.map((capacityMessage) => (
            <Link key={capacityMessage._id} to={`/capacity_message/${capacityMessage._id}`}>
              <ListItem>
                <ListItemText primary={capacityMessage.message} secondary={`${capacityMessage.percentage}% Nachricht`} />
              </ListItem>
            </Link>
          ))}
        </List>
      )
    }}
  </Query>
)

export default CapacityMessagesList
