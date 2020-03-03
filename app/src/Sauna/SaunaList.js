import React from 'react'
import { Query } from 'react-apollo'
import SaunaListItem from './SaunaListItem'
import Error from '../Error'
import Loading from '../Loading'
import { ALL_SAUNAS } from '../queries'

const SaunaList = () => (
  <Query query={ALL_SAUNAS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />

      return (
        <>
          {/* {data.allSaunas.map((sauna) => (
            <SaunaListItem key={sauna._id} sauna={sauna} />
          ))} */}
          <SaunaListItem key={data.allSaunas[0]._id} sauna={data.allSaunas[0]} />
        </>
      )
    }}
  </Query>
)

export default SaunaList
