import React from 'react'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import Error from './Error'
import Loading from './Loading'
import { CAPACITY_MESSAGE } from '../lib/queries'

const CapacityMessageEdit = ({id}) => (
    <Query variables={{id}} query={CAPACITY_MESSAGE}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (                 
                <Typography variant="body1" gutterBottom>
                    {data.capacityMessage.message}
                </Typography>
            )
        }}
    </Query>
)

export default CapacityMessageEdit