import React from 'react'
import { Query } from 'react-apollo'
import Error from './Error'
import Loading from './Loading'
import { ALL_QUOTES } from './queries'

const SaunaList = () => (
  <Query query={ALL_QUOTES}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />

      return (
        <>
          {data.allQuotes.map((quote) => (
            <p key={quote._id}>{quote.quote}</p>
          ))}
        </>
      )
    }}
  </Query>
)

export default SaunaList
