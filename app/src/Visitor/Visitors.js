import React from 'react'
import VisitorList from './VisitorList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(2, 0)
  }
}))

const Visitors = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant='h3' gutterBottom className={classes.title}>
        Besucher
      </Typography>
      <Typography variant='body1' gutterBottom>
        Visualisierung der neusten Besucherzahlen.
      </Typography>
      <VisitorList />
    </div>
  )
}

export default Visitors
