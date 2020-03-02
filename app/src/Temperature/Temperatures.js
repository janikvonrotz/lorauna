import React from 'react'
import TemperatureList from './TemperatureList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(2, 0)
  }
}))

const Temperatures = () => {
  const classes = useStyles()

  return (

    <div>
      <Typography variant='h3' gutterBottom className={classes.title}>
        Temperaturen
      </Typography>
      <Typography variant='body1' gutterBottom>
        Übersicht der Sauna Temperaturen.
      </Typography>
      <TemperatureList />
    </div>
  )
}

export default Temperatures
