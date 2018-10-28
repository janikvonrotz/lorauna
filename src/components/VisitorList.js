import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Typography from '@material-ui/core/Typography'
import Error from './Error'
import Loading from './Loading'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'

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

const VisitorList = () => (
    <Query query={ALL_VISITORS}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <div>
                    <Typography variant="h2">
                        Besucher
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Liste aller Sauna Ein- und Ausgänge.
                    </Typography>
                    <List>
                        {data.allVisitors.map((visitor) => (
                            <ListItem key={visitor._id}>
                                {visitor.value === 1 ? <AddCircleIcon /> : <RemoveCircleIcon />}
                                <ListItemText primary={(new Date(visitor.created)).toString()} secondary={visitor.sauna.name} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            )
        }}
    </Query>
)

export default VisitorList