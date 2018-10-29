import React from 'react'
import { Query } from 'react-apollo'
import SaunaListItem from './SaunaListItem'
import Error from './Error'
import Loading from './Loading'
import { ALL_SAUNAS } from '../lib/queries'

const SaunaList = () => (
    <Query query={ALL_SAUNAS}>
        {({ loading, error, data }) => {

            if (loading) return <Loading />
            if (error) return <Error />

            return (
                <div>
                    {data.allSaunas.map((sauna) => (
                        <SaunaListItem key={sauna._id} sauna={sauna} />
                    ))}
                </div>
            )
        }}
    </Query>
)

export default SaunaList