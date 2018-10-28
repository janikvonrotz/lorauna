import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Typography from '@material-ui/core/Typography'
import SaunaListItem from './SaunaListItem'
import Error from './Error'
import Loading from './Loading'

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

const SaunaList = () => (
    <Query query={ALL_SAUNAS}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <div>
                    <Typography variant="h2">
                        Saunas
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Verwaltung der Saunalandschaften.
                    </Typography>
                    {data.allSaunas.map((sauna) => (
                        <SaunaListItem key={sauna._id} sauna={sauna} />
                    ))}
                </div>
            )
        }}
    </Query>
)

export default SaunaList