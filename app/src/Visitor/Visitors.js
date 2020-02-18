import React from 'react'
import VisitorList from './VisitorList'
import Typography from '@material-ui/core/Typography'

const Visitors = () => (
  <div>
    <Typography variant='h3' gutterBottom>
      Besucher
    </Typography>
    <Typography variant='body1' gutterBottom>
      Visualisierung der neusten Besucherzahlen.
    </Typography>
    <VisitorList />
  </div>
)

export default Visitors
