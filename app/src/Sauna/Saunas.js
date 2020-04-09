import React from 'react'
import SaunaList from './SaunaList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(2, 0)
  }
}))

const Saunas = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant='h3' gutterBottom className={classes.title}>
        Saunas
      </Typography>
      <Typography variant='body1' gutterBottom>
        Verwaltung der Saunalandschaften.
      </Typography>
      <SaunaList />
    </>
  )
}

export default Saunas
