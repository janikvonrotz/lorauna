import React from 'react'
import QuoteList from './QuoteList'
import Typography from '@material-ui/core/Typography'

const Quotes = () => (
  <div>
    <Typography variant='h3' gutterBottom>
      Sprüche
    </Typography>
    <Typography variant='body1' gutterBottom>
      Übersicht der Sauna Sprüche.
    </Typography>
    <QuoteList />
  </div>
)

export default Quotes
