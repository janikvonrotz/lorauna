import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Typography from '@material-ui/core/Typography'
import Error from './Error'
import Loading from './Loading'

const SaunaEdit = ({id}) => (
    <Query variables={{id}}
        query={gql`
            query sauna($id: String) {
                sauna(id: $id) {
                    name
                }
            }
        `}
    >
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <div>
                    <Typography variant="h2">
                        Sauna
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {data.sauna.name}
                    </Typography>
                </div>
            )
        }}
    </Query>
)

export default SaunaEdit