import React from 'react'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import Error from './Error'
import Loading from './Loading'
import { SAUNA } from '../lib/queries'

const SaunaEdit = ({id}) => (
    <Query variables={{id}} query={SAUNA}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <Typography variant="body1" gutterBottom>
                    {data.sauna.name}
                </Typography>
            )
        }}
    </Query>
)

export default SaunaEdit